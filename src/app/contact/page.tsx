import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-foreground">Contact</h1>
      <p className="mt-4 max-w-lg text-muted">
        The best way to reach me is by email, or connect on LinkedIn.
      </p>

      <div className="mt-8 flex flex-col gap-4 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent"
        >
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:border-accent"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
