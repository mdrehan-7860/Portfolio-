const education = [
  {
    period: "2020 — 2024",
    degree: "Bachelor of Technology in Computer Science",
    institution: "University of Technology",
    description: "Focused on software engineering, data structures, algorithms, and cloud computing.",
  },
];

const certifications = [
  {
    year: "2024",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    year: "2023",
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta",
  },
  {
    year: "2023",
    title: "Google Data Analytics Specialization",
    issuer: "Google",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl border-x border-t border-border px-6 py-20">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-border p-12 md:border-b-0 md:border-r">
          <h2 className="mb-8 font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.degree}>
                <span className="font-mono text-[10px] text-muted-foreground">{item.period}</span>
                <h4 className="font-bold text-foreground">{item.degree}</h4>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-12">
          <h2 className="mb-8 font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Certifications
          </h2>
          <div className="space-y-8">
            {certifications.map((cert) => (
              <div key={cert.title}>
                <span className="font-mono text-[10px] text-muted-foreground">{cert.year}</span>
                <h4 className="font-bold text-foreground">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
