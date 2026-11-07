import { useState, type FormEvent } from "react";
import { CalendarCheck, MessageSquare } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROJECTS } from "@/lib/projects";
import { formatEnquiry, isValidIndianPhone, whatsappLink, type Enquiry } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./FloatingContact";

const TIME_SLOTS = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "5:30 PM"];

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function EnquiryForm({
  defaultProject,
  defaultKind = "site-visit",
  className,
}: {
  defaultProject?: string;
  defaultKind?: Enquiry["kind"];
  className?: string;
}) {
  const [kind, setKind] = useState<Enquiry["kind"]>(defaultKind);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const enquiry: Enquiry = {
      kind,
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      project: String(data.get("project") ?? "") || undefined,
      visitDate: kind === "site-visit" ? String(data.get("visitDate") ?? "") || undefined : undefined,
      visitTime: kind === "site-visit" ? String(data.get("visitTime") ?? "") || undefined : undefined,
      message: String(data.get("message") ?? ""),
    };

    const next: Record<string, string> = {};
    if (enquiry.name.trim().length < 2) next.name = "Please enter your name";
    if (enquiry.name.length > 80) next.name = "Name is too long";
    if (!isValidIndianPhone(enquiry.phone)) next.phone = "Enter a valid 10-digit mobile number";
    if (kind === "site-visit" && !enquiry.visitDate) next.visitDate = "Choose a preferred date";
    if ((enquiry.message ?? "").length > 600) next.message = "Message is too long";
    if (!data.get("consent")) next.consent = "Please accept to be contacted";
    setErrors(next);
    if (Object.keys(next).length) return;

    window.open(whatsappLink(formatEnquiry(enquiry)), "_blank", "noopener,noreferrer");
    toast.success(kind === "site-visit" ? "Site visit request ready" : "Enquiry ready", {
      description: "WhatsApp has opened with your details — just tap send and our team will confirm shortly.",
    });
    e.currentTarget.reset();
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs font-medium text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className={cn("rounded-xl border bg-card p-6 shadow-soft md:p-8", className)}>
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1" role="tablist">
        {(
          [
            { k: "site-visit", label: "Book Site Visit", icon: CalendarCheck },
            { k: "enquiry", label: "Enquire", icon: MessageSquare },
          ] as const
        ).map(({ k, label, icon: Icon }) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={kind === k}
            onClick={() => setKind(k)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-semibold transition-colors",
              kind === k ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-4" /> {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" maxLength={80} className="mt-1.5 h-11 bg-card" placeholder="Your name" />
          {err("name")}
        </div>
        <div>
          <Label htmlFor="phone">Mobile number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={16} className="mt-1.5 h-11 bg-card" placeholder="98XXXXXXXX" />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="project">Project of interest</Label>
          <select id="project" name="project" defaultValue={defaultProject ?? ""} className={cn(selectClass, "mt-1.5")}>
            <option value="">Any / Not sure yet</option>
            {PROJECTS.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        {kind === "site-visit" && (
          <>
            <div>
              <Label htmlFor="visitDate">Preferred date</Label>
              <Input id="visitDate" name="visitDate" type="date" min={today} className="mt-1.5 h-11 bg-card" />
              {err("visitDate")}
            </div>
            <div>
              <Label htmlFor="visitTime">Preferred time</Label>
              <select id="visitTime" name="visitTime" defaultValue={TIME_SLOTS[0]} className={cn(selectClass, "mt-1.5")}>
                {TIME_SLOTS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea id="message" name="message" maxLength={600} rows={3} className="mt-1.5 bg-card" placeholder="Plot size, budget, loan assistance…" />
          {err("message")}
        </div>
      </div>

      <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
        <input type="checkbox" name="consent" className="mt-0.5 accent-primary" defaultChecked />
        I agree to be contacted by Janasena Properties by call, SMS or WhatsApp regarding my enquiry.
      </label>
      {err("consent")}

      <Button type="submit" variant="whatsapp" size="xl" className="mt-6 w-full">
        <WhatsAppIcon className="size-5" />
        {kind === "site-visit" ? "Request Site Visit on WhatsApp" : "Send Enquiry on WhatsApp"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">Free pick-up & drop for site visits on request.</p>
    </form>
  );
}
