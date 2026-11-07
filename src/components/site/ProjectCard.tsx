import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function StatusBadge({ status, className }: { status: Project["status"]; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary shadow-sm",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {status}
    </span>
  );
}

export function ProjectCard({
  project,
  compareSelected,
  onToggleCompare,
  compareDisabled,
}: {
  project: Project;
  compareSelected?: boolean;
  onToggleCompare?: () => void;
  compareDisabled?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-soft transition-shadow hover:shadow-elevated">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={project.images[0]}
          alt={`${project.name}, ${project.locality}`}
          loading="lazy"
          width={1280}
          height={896}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-card-overlay" />
        <StatusBadge status={project.status} className="absolute left-4 top-4" />
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-ink-foreground">
          <p className="text-sm font-semibold">{project.price}</p>
          <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MapPin className="size-3.5 text-accent" /> {project.locality}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="hover:text-primary">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t pt-4 text-xs">
          <div>
            <dt className="text-muted-foreground">Type</dt>
            <dd className="mt-0.5 font-semibold text-foreground">{project.type === "Residential Plots" ? "Plots" : "Residential"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Land</dt>
            <dd className="mt-0.5 font-semibold text-foreground">{project.landArea ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Units</dt>
            <dd className="mt-0.5 font-semibold text-foreground">{project.units ?? "—"}</dd>
          </div>
        </dl>
        {onToggleCompare && (
          <label
            className={cn(
              "mt-4 flex cursor-pointer items-center gap-2 text-xs font-semibold text-primary",
              compareDisabled && !compareSelected && "cursor-not-allowed opacity-50",
            )}
          >
            <input
              type="checkbox"
              checked={!!compareSelected}
              disabled={compareDisabled && !compareSelected}
              onChange={onToggleCompare}
              className="accent-primary"
            />
            Add to compare
          </label>
        )}
      </div>
    </article>
  );
}
