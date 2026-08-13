import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Rehan — Developer Portfolio" },
      { name: "description", content: "Personal developer portfolio of Mohammad Rehan showcasing projects, skills, education, certifications, and contact information." },
      { property: "og:title", content: "Mohammad Rehan — Developer Portfolio" },
      { property: "og:description", content: "Personal developer portfolio of Mohammad Rehan showcasing projects, skills, education, certifications, and contact information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
