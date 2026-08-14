# Portfolio Site

Michael Roth's personal portfolio/resume site (rothdigital.dev), built as a static Next.js app. Its job is to present his career to full-time employers considering him for a role.

## Language

**Software Engineer**:
Michael's actual, current professional title, used verbatim as the site's headline/tagline (`site.ts`'s `title` field) and in page metadata.
_Avoid_: "Forward Deployed Engineer" as a title claim — that's a specific job title (coined by Palantir, used by a handful of companies) for customer-embedded technical delivery roles. Michael has never held it. Using it as the headline would create a mismatch a recruiter could catch by cross-checking his resume/LinkedIn.

**Forward-deployed-style work**:
The broader category of customer-facing, cross-functional, embedded technical delivery work — not the specific "Forward Deployed Engineer" title. This is Michael's stated career direction, and it's evidenced by his existing MorseLife experience (leading projects end-to-end, partnering directly with executives and business stakeholders). It's expressed as body copy on the homepage and About page — never as a headline/title claim.
_Avoid_: "Forward Deployed Engineer" (implies the literal title), "FDE" (same issue, plus jargon a general employer audience won't recognize).

## Decisions

- **Primary audience is full-time employers**, not freelance clients. The freelance-availability mention on the homepage stays a minor aside (small text, not a CTA button) — the site should not read as a freelance pitch.
- **Projects page is intentionally sparse.** It ships with real projects only as they're built; "more coming soon" placeholder content is expected, not a launch blocker.
