import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

import { SITE, whatsappLink } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36A9.43 9.43 0 0 1 2.56 12C2.56 6.78 6.8 2.54 12.05 2.54c2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.48-9.48 9.48zm8.06-17.54A11.33 11.33 0 0 0 12.04.62C5.76.62.65 5.73.65 12c0 2.01.52 3.97 1.52 5.7L.55 23.62l6.06-1.59a11.36 11.36 0 0 0 5.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.34-8.06z" />
    </svg>
  );
}

export { WhatsAppIcon };

export function FloatingContact() {
  const wa = whatsappLink("Hello Janasena Properties, I'd like to know more about your projects.");

  return (
    <>
      {/* Desktop: floating stack */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href="https://m.me/janasenaproperties"
          target="_blank"
          rel="noreferrer"
          aria-label="Message us on Facebook Messenger"
          className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" />
        </a>
        <a
          href={`tel:${SITE.phoneE164}`}
          aria-label={`Call ${SITE.phoneDisplay}`}
          className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elevated transition-transform hover:scale-105"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </div>

      {/* Mobile: bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink-border bg-ink text-ink-foreground md:hidden">
        <a href={`tel:${SITE.phoneE164}`} className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold">
          <Phone className="size-5 text-accent" /> Call
        </a>
        <a href={wa} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 bg-whatsapp py-2.5 text-xs font-semibold text-whatsapp-foreground">
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold">
          <CalendarCheck className="size-5 text-accent" /> Site Visit
        </Link>
      </div>
    </>
  );
}
