import type { Metadata } from "next";
import { site } from "@/lib/site";
import { experience, skills } from "@/lib/resume";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
};

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Experience</h1>
        <a
          href="/resume.pdf"
          className="text-sm text-accent underline-offset-4 hover:underline"
        >
          Download Résumé
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-12">
        {experience.map((role) => (
          <div key={role.company} className="border-l border-border pl-6">
            <p className="font-mono text-xs text-muted">{role.dates}</p>
            <h2 className="mt-1 text-lg font-medium text-foreground">
              {role.title}
            </h2>
            <p className="text-sm text-accent">
              {role.company} · {role.location}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            {role.projects && (
              <div className="mt-5 flex flex-col gap-4">
                {role.projects.map((project) => (
                  <div key={project.name}>
                    <p className="text-sm font-medium text-foreground">
                      {project.name}
                    </p>
                    <ul className="mt-1 flex flex-col gap-1 text-sm text-muted">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <h2 className="text-lg font-medium text-foreground">Skills</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs text-muted">
                {group.category}
              </p>
              <p className="mt-1.5 text-sm text-foreground">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
