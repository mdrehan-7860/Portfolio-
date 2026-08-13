import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/routes/__root";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm font-bold tracking-tighter">
          <span className="text-foreground">MOHAMMAD REHAN</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="space-x-8 font-mono text-[11px] font-medium uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <div className="size-2 rounded-full bg-green-500 animate-pulse-slow" />
            <span className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex size-9 items-center justify-center border border-border transition-colors hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-foreground" />
            ) : (
              <Moon className="size-4 text-foreground" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="flex size-9 items-center justify-center border border-border transition-colors hover:bg-accent md:hidden"
          >
            {mobileOpen ? (
              <X className="size-4 text-foreground" />
            ) : (
              <Menu className="size-4 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono text-[11px] font-medium uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
