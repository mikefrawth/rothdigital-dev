import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <Image
          src="/headshot.jpg"
          alt={site.name}
          width={128}
          height={128}
          priority
          className="h-32 w-32 rounded-full border border-border object-cover"
        />
        <div>
          <p className="font-mono text-sm text-accent">{site.title}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-4 max-w-lg text-muted">
            Software engineer with 11+ years of experience and an AWS
            Certified Solutions Architect. I design, build, and ship
            business-critical software — and I put AI tooling to work as a
            force multiplier across the whole process.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-16 border-t border-border pt-8 text-sm text-muted">
        Open to select freelance engagements —{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-accent underline-offset-4 hover:underline"
        >
          get in touch
        </a>
        .
      </p>
    </div>
  );
}
