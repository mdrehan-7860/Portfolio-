import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-taskflow.png";
import project2 from "@/assets/project-ecotrack.png";
import project3 from "@/assets/project-codecollab.png";

const filters = ["ALL", "REACT", "TYPESCRIPT", "NODE.JS"];

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    year: "2024",
    description:
      "A collaborative task management dashboard with real-time updates, drag-and-drop workflows, and team analytics.",
    tags: ["REACT", "TYPESCRIPT", "NODE.JS"],
    tech: ["React", "TypeScript", "Node.js", "Socket.io"],
    image: project1,
    github: "https://github.com/mohammadrehan/taskflow",
    demo: "https://taskflow-demo.vercel.app",
  },
  {
    id: 2,
    title: "EcoTrack",
    year: "2023",
    description:
      "Sustainable logistics tracking platform with map-based visualization, route optimization, and carbon footprint insights.",
    tags: ["REACT", "TYPESCRIPT"],
    tech: ["React", "Firebase", "Google Maps API", "Tailwind CSS"],
    image: project2,
    github: "https://github.com/mohammadrehan/ecotrack",
    demo: "https://ecotrack-demo.vercel.app",
  },
  {
    id: 3,
    title: "CodeCollab",
    year: "2023",
    description:
      "Real-time code collaboration tool for remote teams featuring live editing, video chat, and version history.",
    tags: ["TYPESCRIPT", "NODE.JS"],
    tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    image: project3,
    github: "https://github.com/mohammadrehan/codecollab",
    demo: "https://codecollab-demo.vercel.app",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20">
      <div className="mb-12 flex flex-col items-baseline justify-between gap-6 md:flex-row">
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Selected Works
        </h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:border-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-px bg-border md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-background p-8 transition-colors hover:bg-accent/30"
          >
            <div className="relative mb-6 aspect-video w-full overflow-hidden bg-muted outline outline-1 -outline-offset-1 outline-border">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
            </div>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] uppercase tracking-tighter text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                <Github className="size-3.5" />
                Source
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="size-3.5" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full bg-background p-8 text-center text-muted-foreground">
            No projects match this filter.
          </div>
        )}
      </div>
    </section>
  );
}
