import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. From landing pages to complex platforms.",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Mobile Apps",
    description:
      "Native iOS and cross-platform mobile experiences that users love. Swift, React Native, and more.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud architecture on AWS. CI/CD pipelines, serverless functions, and infrastructure as code.",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Technical leadership and strategic guidance for startups and teams building ambitious products.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

const projects = [
  {
    title: "RYPL",
    description:
      "Building the future of real-time collaboration and creative tools.",
    tags: ["TypeScript", "React", "AWS", "Node.js"],
  },
  {
    title: "Dickerator",
    description:
      "A fun iOS camera app with custom filters, stickers, and a social showcase.",
    tags: ["Swift", "SwiftUI", "Firebase", "StoreKit"],
  },
  {
    title: "LivePlayHosts",
    description:
      "Platform connecting live entertainment hosts with venues and events.",
    tags: ["Full-Stack", "Platform", "Marketplace"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-24 md:py-36">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Software Engineer & Creative Technologist
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
          I build digital products that{" "}
          <span className="text-accent">move the needle.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Full-stack engineer with a passion for crafting polished web and mobile
          experiences. From concept to production — I ship things that matter.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </Link>
          <Link
            href="#work"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
          >
            View my work
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </h2>
          <div className="mt-6 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">
                Engineer, builder, problem solver.
              </h3>
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m Geremie Camara — a software engineer who thrives at the
                intersection of design and engineering. I build products from the
                ground up, combining clean architecture with thoughtful user
                experiences.
              </p>
              <p>
                Whether it&apos;s a high-performance web app, a native mobile
                experience, or cloud infrastructure that scales — I bring ideas
                to life with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Services
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            What I can do for you.
          </h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
              >
                <svg
                  className="mb-4 h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={service.icon}
                  />
                </svg>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Work
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Selected projects.
          </h3>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-border p-8 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Let&apos;s work together.
          </h3>
          <p className="mt-4 max-w-lg text-muted leading-relaxed">
            Have a project in mind or just want to chat? Reach out and
            let&apos;s make something great.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@geremie.com"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              hello@geremie.com
            </a>
            <a
              href="https://github.com/geremie-rypl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-background"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
