import type { Metadata } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/resume";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
};

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Case studies from professional work, plus independent projects as
        they ship — deployed and linked here as they go live.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-border p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-foreground">
                {project.name}
              </h2>
              <span className="font-mono text-xs text-accent">
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {project.stack.join(" · ")}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-border p-8 text-center">
        <p className="text-sm text-muted">More projects coming soon.</p>
      </div>
    </div>
  );
}
