import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/zippystarter/container";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Bot,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function HeroSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <Container
      id="about"
      wrapperClassName="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
      className="mx-auto max-w-7xl flex-1"
    >
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full bg-background overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] opacity-15 dark:opacity-10 before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* Location Callout */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="size-3.5 text-foreground" />
            <span>{profile.location}</span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display tracking-tighter leading-[0.92] text-foreground">
              FULL
              <br />
              STACK
              <br />
              <span className="text-foreground">
                ENGINEER_
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg font-mono text-foreground font-semibold tracking-tight">
              Building Modular SaaS & Applied AI Systems
            </p>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
              {profile.techSummary}
            </p>
          </div>

          {/* Strategic About Narrative */}
          <div className="space-y-4 pt-2 border-l-2 border-border pl-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-foreground">3+ years</strong> of commercial experience engineering scalable web applications, robust REST/GraphQL APIs, relational database optimization (PostgreSQL), and defensive testing suites.
            </p>
            <p>
              <span className="text-foreground font-semibold">Actively transitioning into Applied AI Engineering:</span> AI agents and LLMs are probabilistic by nature; operating them safely in production demands deterministic backends, strict runtime schema validation (Zod), defensive security boundaries, and resilient retrieval pipelines (RAG with pgvector, Vercel AI SDK, LangChain).
            </p>
          </div>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap gap-4 pt-4 items-center">
            <Link
              href="#featured-project"
              className={cn("uppercase font-mono text-xs tracking-wider rounded-none", buttonVariants({ size: "lg" }))}
            >
              Explore SprintHub <ArrowRight className="size-4 ml-1" />
            </Link>

            <Link
              href="#contact"
              className={cn(
                "uppercase font-mono text-xs tracking-wider rounded-none",
                buttonVariants({ variant: "outline", size: "lg" })
              )}
            >
              Get in Touch
            </Link>

            <div className="flex items-center gap-1 pl-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-foreground")}
              >
                <Github className="size-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-foreground")}
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Send direct email"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-foreground")}
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Executive Spec Sheet (UI/UX Senior Refactor) */}
        <div className="lg:col-span-5 relative">
          <div className="border border-border bg-card/60 backdrop-blur-md font-mono text-xs shadow-xl space-y-5 p-6">
            {/* Header: Window Dots & Title */}
            <div className="flex items-center justify-between pb-3 border-b border-border text-[11px]">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-border"></div>
                <div className="size-2.5 rounded-full bg-border"></div>
                <div className="size-2.5 rounded-full bg-border"></div>
                <span className="text-muted-foreground ml-1">profile.spec.ts</span>
              </div>
              <span className="text-muted-foreground text-[10px]">PRODUCTION READY</span>
            </div>

            {/* 3 High-Signal Core Pillars (No Fake Progress Bars) */}
            <div className="space-y-4 text-xs">
              {/* Pillar 1: Backend */}
              <div className="flex items-start gap-3">
                <div className="p-2 border border-border bg-secondary/40 shrink-0">
                  <Server className="size-4 text-foreground" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-xs">
                    Modular Backend Architecture
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed">
                    Controller-Service-Repository pattern in Node.js 22, Express 5, Prisma 6 and PostgreSQL 17.
                  </div>
                </div>
              </div>

              {/* Pillar 2: Applied AI */}
              <div className="flex items-start gap-3">
                <div className="p-2 border border-border bg-secondary/40 shrink-0">
                  <Bot className="size-4 text-foreground" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-xs">
                    Applied AI & RAG Pipelines
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed">
                    Deterministic guardrails, pgvector semantic search, and schema-enforced LLM workflows.
                  </div>
                </div>
              </div>

              {/* Pillar 3: Defensive Quality */}
              <div className="flex items-start gap-3">
                <div className="p-2 border border-border bg-secondary/40 shrink-0">
                  <ShieldCheck className="size-4 text-foreground" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-xs">
                    Defensive Security & Testing
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed">
                    Contextual RBAC, HttpOnly JWTs, strict Zod validation, and automated test pyramids.
                  </div>
                </div>
              </div>
            </div>

            {/* 3 High-Value Signals / Fast Facts */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border text-center">
              <div className="p-2.5 border border-border bg-background/50">
                <div className="text-lg font-bold font-display text-foreground">3+</div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="p-2.5 border border-border bg-background/50">
                <div className="text-lg font-bold font-display text-foreground">B2</div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">English</div>
              </div>
              <div className="p-2.5 border border-border bg-background/50">
                <div className="text-lg font-bold font-display text-foreground">100%</div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">TypeScript</div>
              </div>
            </div>

            {/* Bridge CTA to SprintHub */}
            <Link
              href="#featured-project"
              className="group flex items-center justify-between p-3 border border-border bg-secondary/30 hover:border-foreground/40 hover:bg-secondary/60 transition-colors text-xs text-foreground"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="font-semibold text-[11px]">SprintHub Case Study</span>
              </div>
              <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
