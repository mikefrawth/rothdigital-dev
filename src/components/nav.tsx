import Link from "next/link";
import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-mono text-sm text-foreground">
          {site.name}
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
