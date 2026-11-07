import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";

import { PROJECTS } from "@/lib/projects";
import { SITE, fullAddress } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            Developing quality infrastructure and real estate projects in North Bengaluru since {SITE.since}.
            Hassle-free plot purchase with end-to-end assistance.
          </p>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent"
          >
            <Facebook className="size-4" /> facebook.com/janasenaproperties
          </a>
        </div>

        <div className="lg:col-span-2">
          <h3 className="eyebrow text-accent">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li><Link to="/about" className="hover:text-ink-foreground">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-ink-foreground">Projects</Link></li>
            <li><Link to="/nri" className="hover:text-ink-foreground">NRI Services</Link></li>
            <li><Link to="/contact" className="hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-accent">Projects</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="hover:text-ink-foreground">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-accent">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{fullAddress}</li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-ink-foreground">{SITE.phoneDisplay}</a>
                <br />
                <a href={`tel:${SITE.salesPhoneE164}`} className="hover:text-ink-foreground">{SITE.salesPhoneDisplay}</a>
              </span>
            </li>
            <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-accent" />{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} · CIN {SITE.cin}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/terms" className="hover:text-ink-foreground">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-ink-foreground">Disclaimer</Link>
            <Link to="/privacy-policy" className="hover:text-ink-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
