"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

export function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState("general")

  const projects = [
    {
      id: "general",
      name: "General Fund",
      description: "Support all of our initiatives where it's needed most.",
    },
    {
      id: "water",
      name: "Clean Water Initiative",
      description: "Provide clean water solutions to rural communities.",
    },
    {
      id: "education",
      name: "Education for All",
      description: "Build schools and provide educational resources.",
    },
    {
      id: "healthcare",
      name: "Healthcare Access",
      description: "Improve healthcare access through mobile clinics.",
    },
  ]

  return (
    <RadioGroup value={selectedProject} onValueChange={setSelectedProject} className="space-y-3">
      {projects.map((project) => (
        <Label
          key={project.id}
          htmlFor={project.id}
          className={`flex items-start p-4 border rounded-md cursor-pointer transition-all ${selectedProject === project.id ? "border-primary bg-primary/10" : "border-input hover:bg-muted"
            }`}
        >
          <RadioGroupItem value={project.id} id={project.id} className="mt-1" />
          <div className="ml-3">
            <div className="font-medium">{project.name}</div>
            <div className="text-sm text-muted-foreground">{project.description}</div>
          </div>
        </Label>
      ))}
    </RadioGroup>
  )
}

