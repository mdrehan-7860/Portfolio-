import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Frontend Architecture", level: 90 },
  { name: "React & Next.js", level: 88 },
  { name: "TypeScript & JavaScript", level: 85 },
  { name: "Node.js & Backend APIs", level: 80 },
  { name: "Cloud Infrastructure (AWS)", level: 72 },
  { name: "System Design", level: 78 },
];

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
  "PostgreSQL",
  "MongoDB",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(level);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="flex justify-between border-b border-border pb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <div className="flex items-center gap-2">
        <div className="h-1 w-24 overflow-hidden bg-border">
          <div
            className="h-full bg-primary transition-all duration-1000"
            style={{ width: `${width}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{level}%</span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-border p-12 md:border-b-0 md:border-r">
          <h2 className="mb-8 font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Expertise
          </h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        <div className="p-12">
          <h2 className="mb-8 font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-tighter text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
