import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="font-mono text-[10px] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Mohammad Rehan / Built for precision
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase">
          <a
            href="https://github.com/mohammadrehan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-foreground transition-colors hover:text-primary"
          >
            <Github className="size-3.5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mohammadrehan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-3.5" />
            LinkedIn
          </a>
          <a
            href="https://twitter.com/rehan_dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-foreground transition-colors hover:text-primary"
          >
            <Twitter className="size-3.5" />
            Twitter
          </a>
          <a
            href="mailto:rehan@example.com"
            className="flex items-center gap-1 text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-3.5" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
