import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  { to: "/nri", label: "NRI Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-border bg-ink/95 text-ink-foreground backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-foreground data-[status=active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-foreground hover:text-accent"
          >
            <Phone className="size-4 text-accent" />
            {SITE.phoneDisplay}
          </a>
          <Button asChild variant="gold">
            <Link to="/contact">Book a Site Visit</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline-light" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-ink-border bg-ink text-ink-foreground">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-md px-3 py-3 font-display text-xl text-ink-foreground data-[status=active]:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 px-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book a Site Visit
                </Link>
              </Button>
              <a href={`tel:${SITE.phoneE164}`} className="text-center text-sm text-ink-muted">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
