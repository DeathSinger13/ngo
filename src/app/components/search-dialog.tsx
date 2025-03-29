"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, X, ArrowRight, FileText, Calendar, Users, Heart } from "lucide-react";
import { cn } from "../lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "page" | "blog" | "event" | "project";
}

interface SearchDialogProps {
  children?: React.ReactNode;
  className?: string;
}

export function SearchDialog({ children, className }: SearchDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // For keyboard navigation

  // Mock API Fetch with Debounce
  const fetchResults = useCallback(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      const mockResults: SearchResult[] = [
        { id: "1", title: "Clean Water Initiative", description: "Providing clean water to communities in need", url: "/missions/projects/clean-water-initiative", type: "project" as const },
        { id: "2", title: "Annual Charity Gala", description: "Join us for our biggest fundraising event of the year", url: "/events/annual-charity-gala", type: "event" as const },
        { id: "3", title: "Volunteer Opportunities", description: "Ways to get involved and make a difference", url: "/get-involved/volunteer", type: "page" as const },
        { id: "4", title: "The Impact of Clean Water on Communities", description: "How clean water transforms lives", url: "/blog/impact-of-clean-water", type: "blog" as const }
      ].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
      setIsLoading(false);
    }, 300);
  }, [query]);

  useEffect(() => {
    const handler = setTimeout(fetchResults, 300); // Debounce API calls
    return () => clearTimeout(handler);
  }, [query, fetchResults]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    router.push(result.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(results[activeIndex]);
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case "blog":
        return <FileText className="h-4 w-4 text-primary" />;
      case "event":
        return <Calendar className="h-4 w-4 text-secondary" />;
      case "project":
        return <Heart className="h-4 w-4 text-tertiary" />;
      default:
        return <Users className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className={cn("gap-2", className)}>
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline-block">Search</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
          <Input
            className="flex h-12 w-full rounded-md border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search for anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          {query && (
            <Button variant="ghost" size="icon" onClick={() => setQuery("")} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-0">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-muted-foreground">Searching...</div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  className={cn(
                    "w-full text-left px-4 py-2 flex items-start gap-3",
                    activeIndex === index ? "bg-muted" : "hover:bg-muted/50"
                  )}
                  onClick={() => handleSelect(result)}
                >
                  <div className="mt-1">{getIconForType(result.type)}</div>
                  <div>
                    <div className="font-medium">{result.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{result.description}</div>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <span className="capitalize">{result.type}</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{query}"</div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">Type at least 2 characters to search</div>
          )}
        </div>
        <div className="border-t px-4 py-3 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <div>
              Press <kbd className="rounded border bg-muted px-1 text-xs">Enter</kbd> to select
            </div>
            <div>
              <kbd className="rounded border bg-muted px-1 text-xs">↑</kbd>{" "}
              <kbd className="rounded border bg-muted px-1 text-xs">↓</kbd> to navigate
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
