import type { Metadata } from "next";
import { site } from "@/lib/site";
import { summary, certifications, education } from "@/lib/resume";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-foreground">About</h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">{summary}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        I enjoy solving hard problems and turning them into working
        solutions — that's the part of the job I never get tired of, and
        after 11+ years it's still what gets me out of bed.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        That's also the direction I want to keep growing in: less time
        removed from the problem, more time embedded with the team or
        customer who owns it. It's close to what I've already been doing at
        MorseLife — working directly with executives and business
        stakeholders to turn ambiguous goals into shipped software — just
        with the scope widened.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-medium text-foreground">
            Certifications
          </h2>
          <ul className="mt-3 flex flex-col gap-3 text-sm">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="text-foreground">{cert.name}</p>
                <p className="text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium text-foreground">Education</h2>
          <ul className="mt-3 flex flex-col gap-3 text-sm">
            {education.map((ed) => (
              <li key={ed.degree}>
                <p className="text-foreground">{ed.degree}</p>
                <p className="text-muted">{ed.school}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
