import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-page relative py-16 md:py-24">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
      {children && <div className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}
