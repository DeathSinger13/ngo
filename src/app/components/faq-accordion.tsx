"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border rounded-lg mb-4 overflow-hidden bg-background/80 backdrop-blur-sm hover:shadow-md transition-all"
        >
          <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
            <span className="text-left font-medium">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 bg-muted/20">
            <p className="text-muted-foreground">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

