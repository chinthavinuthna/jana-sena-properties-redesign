import { Link } from "@tanstack/react-router";
import logoFull from "@/assets/janasena-logo-full.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Janasena Properties – home" className={cn("inline-flex shrink-0", className)}>
      <img
        src={logoFull.url}
        alt="Janasena Properties – A Name You Can Trust"
        width={608}
        height={190}
        className="h-12 w-auto md:h-14"
      />
    </Link>
  );
}
