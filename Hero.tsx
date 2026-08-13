import { Github, Linkedin, Twitter, Download } from "lucide-react";

export function Hero() {
  const handleResumeDownload = () => {
    const resumeText = `MOHAMMAD REHAN — SOFTWARE DEVELOPER

CONTACT
Email: rehan@example.com
LinkedIn: linkedin.com/in/mohammadrehan
GitHub: github.com/mohammadrehan

SUMMARY
Passionate software developer with hands-on experience in full-stack web development, modern frontend frameworks, and cloud technologies. Built scalable projects that solve real-world problems and enjoys creating clean, user-centric interfaces.

EDUCATION
Bachelor of Technology in Computer Science
University of Technology, 2020 — 2024

SKILLS
JavaScript, TypeScript, React, Next.js, Node.js, Python, Tailwind CSS, Git, Docker, AWS, PostgreSQL, MongoDB

CERTIFICATIONS
- AWS Certified Cloud Practitioner
- Meta Frontend Developer Professional Certificate
- Google Data Analytics Specialization

PROJECTS
- TaskFlow: Collaborative task management dashboard with real-time updates
- EcoTrack: Sustainable logistics tracking platform with map-based visualization
- CodeCollab: Real-time code collaboration tool for remote teams

EXPERIENCE
Frontend Developer Intern, TechStart Solutions (2023)
- Built responsive UI components and integrated REST APIs for a SaaS dashboard
`;

    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mohammad_Rehan_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mx-auto max-w-7xl border-x border-border px-6 py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end">
        <div className="flex-1 animate-draw">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Full Stack Developer
          </p>
          <h1 className="max-w-[14ch] font-display text-5xl font-extrabold leading-[0.9] tracking-tighter text-foreground md:text-8xl">
            Building Digital <span className="text-primary">Structures</span>{" "}
            That Scale.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            I'm Mohammad Rehan, a developer focused on crafting clean, performant web
            experiences and robust backend systems. I turn ideas into shipped products.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-foreground"
            >
              Contact Form
            </a>
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-accent"
            >
              <Download className="size-4" />
              Get Resume
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:mt-0 md:w-80 animate-draw-delay">
          <div className="border-t border-border pt-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Based in</span>
            <p className="font-medium text-foreground">India</p>
          </div>
          <div className="border-t border-border pt-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Current Focus</span>
            <p className="font-medium text-foreground">Full-Stack Web & Cloud Architecture</p>
          </div>
          <div className="flex gap-4 border-t border-border pt-4">
            <a
              href="https://github.com/mohammadrehan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohammadrehan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="https://twitter.com/rehan_dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex size-10 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
