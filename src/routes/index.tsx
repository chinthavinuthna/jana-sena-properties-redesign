import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  FileCheck2,
  Handshake,
  MapPinned,
  Plane,
  Route as RouteIcon,
  ShieldCheck,
  Star,
  Trees,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-aerial-layout.jpg";
import aboutImg from "@/assets/about-site-visit.jpg";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SectionHeading } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECTS, PROJECT_STATUSES } from "@/lib/projects";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Janasena Properties | Residential Plots in Yelahanka, Rajanukunte & Devanahalli",
      description:
        "Janasena Properties – A Name You Can Trust. Verified residential plots in North Bengaluru since 2015 with end-to-end purchase, registration and loan assistance.",
      path: "/",
    }),
  component: Home,
});

const WHY = [
  { icon: Handshake, title: "End-to-end assistance", text: "Hassle-free plot purchase — from site visit to registration, we stay with you at every step." },
  { icon: FileCheck2, title: "Clear documentation", text: "Transparent dealings with verified titles and guidance through the registration process." },
  { icon: Trees, title: "Developed infrastructure", text: "Underground drainage, black-top roads, street lights, water and avenue plantation." },
  { icon: Banknote, title: "Loan assistance", text: "Our team helps you arrange financing from leading banks for a smooth purchase." },
  { icon: MapPinned, title: "Prime locations", text: "Handpicked layouts in North Bengaluru's high-growth airport and SH-9 corridors." },
  { icon: Banknote, title: "Fair, affordable pricing", text: "Plots priced within reach of middle-class families and first-time investors." },
];

const CORRIDOR = [
  { icon: Plane, title: "Kempegowda International Airport", text: "Our layouts sit minutes from India's third-busiest airport." },
  { icon: RouteIcon, title: "NH 44, SH-9 & STRR", text: "Direct connectivity via Bellary Road, Doddaballapur Road and the Satellite Town Ring Road." },
  { icon: BadgeCheck, title: "Schools, colleges & tech parks", text: "BMSIT, Nitte, REVA, Manyata Tech Park and Yelahanka's retail hub nearby." },
];

const REVIEW_THEMES = [
  { quote: "Helpful and supportive staff who assist buyers from start to finish.", tag: "Customer service" },
  { quote: "A smooth, well-guided registration process with complete paperwork support.", tag: "Registration" },
  { quote: "Affordable plots in prime North Bengaluru locations within our budget.", tag: "Pricing & location" },
  { quote: "Support with arranging bank loans made the purchase easy for our family.", tag: "Loan assistance" },
];

function Home() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [locality, setLocality] = useState("");
  const localities = Array.from(new Set(PROJECTS.map((p) => p.locality)));

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Aerial view of a gated residential plotted layout in North Bengaluru at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-page flex min-h-[88vh] flex-col justify-end pb-14 pt-28 md:pb-20">
          <p className="eyebrow animate-rise text-accent">Since {SITE.since} · North Bengaluru</p>
          <h1 className="mt-5 max-w-4xl animate-rise text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
            Own land you can <em className="font-normal text-accent">trust.</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-ink-muted">
            Quality infrastructure and residential plots in Yelahanka, Rajanukunte and Devanahalli — with
            end-to-end purchase, registration and loan assistance.
          </p>

          {/* Quick search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/projects", search: { status: status || undefined, locality: locality || undefined } });
            }}
            className="mt-10 grid max-w-3xl animate-rise gap-2 rounded-xl bg-card p-2 text-foreground shadow-elevated sm:grid-cols-[1fr_1fr_auto]"
          >
            <label className="flex flex-col rounded-lg px-4 py-2 hover:bg-muted">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">Location</span>
              <select value={locality} onChange={(e) => setLocality(e.target.value)} className="bg-transparent text-sm font-semibold outline-none">
                <option value="">All locations</option>
                {localities.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col rounded-lg px-4 py-2 hover:bg-muted">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">Status</span>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-transparent text-sm font-semibold outline-none">
                <option value="">Any status</option>
                {PROJECT_STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <Button type="submit" variant="ink" size="xl" className="h-auto min-h-12">
              Search Projects <ArrowRight />
            </Button>
          </form>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b bg-card">
        <div className="container-page grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: `${new Date().getFullYear() - SITE.since}+`, v: "Years of trust" },
            { k: `${PROJECTS.length}`, v: "Signature projects" },
            { k: "4.9★", v: "Customer rating" },
            { k: "100%", v: "Registration support" },
          ].map((s) => (
            <div key={s.v} className="px-4 py-8 text-center md:py-10">
              <p className="font-display text-4xl font-semibold text-primary md:text-5xl">{s.k}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our Projects" title="Plotted communities in Bengaluru's growth corridor">
            Verified layouts with clear titles, ready infrastructure and honest pricing.
          </SectionHeading>
          <Button asChild variant="outline-ink" size="lg">
            <Link to="/projects" search={{}}>
              View all projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Janasena advisor guiding a family through a plot layout during a site visit"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elevated"
            />
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-primary p-6 text-primary-foreground shadow-elevated md:-right-6">
              <p className="font-display text-5xl font-semibold text-accent">{SITE.since}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Building trust since</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="About Janasena" title="We develop quality infrastructure and real estate projects">
              <p>
                Since 2015, our company has been at the forefront of developing superior infrastructure and real estate
                projects. Our reputation is built on a track record of delivering exceptional quality, safety and
                sustainability in every project we undertake.
              </p>
              <p className="mt-4">
                Our aim is to create spaces that not only meet our clients' requirements but also enrich the surrounding
                communities.
              </p>
            </SectionHeading>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Data-driven site selection", "Innovative layout design", "Customer-first service", "Transparent pricing"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ShieldCheck className="size-5 text-accent" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild variant="ink" size="xl" className="mt-10">
              <Link to="/about">Our story <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Why Janasena" title="Why invest in Janasena Properties" align="center" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-8 transition-colors hover:bg-accent-soft">
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-accent">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corridor */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow text-accent">Location Advantage</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">North Bengaluru — where the city is growing next</h2>
            <p className="mt-5 text-ink-muted">
              Airport-led growth, aerospace and tech parks, and new ring roads make Yelahanka, Rajanukunte and Devanahalli
              some of the most promising land markets in Karnataka.
            </p>
          </div>
          <div className="grid gap-4">
            {CORRIDOR.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 rounded-xl border border-ink-border bg-ink-foreground/5 p-6">
                <Icon className="size-7 shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Testimonials" title="What our buyers say">
            Rated <strong className="text-foreground">4.9 / 5</strong> by customers across public review platforms.
          </SectionHeading>
          <div className="flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEW_THEMES.map((r) => (
            <figure key={r.tag} className="flex flex-col justify-between rounded-xl border bg-card p-6 shadow-soft">
              <blockquote className="font-display text-lg leading-snug text-foreground">“{r.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-wider text-accent">{r.tag}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA + form */}
      <section className="bg-secondary">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit a Project" title="See your plot before you decide">
              Pick a date and time — our team will confirm your visit on WhatsApp and arrange pick-up on request.
            </SectionHeading>
            <div className="mt-8 space-y-2 text-sm">
              <p className="font-semibold text-foreground">Prefer to talk?</p>
              <a href={`tel:${SITE.phoneE164}`} className="font-display text-3xl font-semibold text-primary hover:text-accent">
                {SITE.phoneDisplay}
              </a>
              <p className="text-muted-foreground">{SITE.hours}</p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
