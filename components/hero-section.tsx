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
  Layers,
  Database,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function HeroSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <Container
      id="about"
      wrapperClassName="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
      className="mx-auto max-w-7xl flex-1"
    >
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full bg-background overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] opacity-25 dark:opacity-20 before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* Location Callout */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            <span>{profile.location}</span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display tracking-tighter leading-[0.92] text-foreground">
              FULL
              <br />
              STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                ENGINEER_
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg font-mono text-primary font-medium tracking-tight">
              Building Modular SaaS & Applied AI Systems
            </p>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground">
              {profile.techSummary}
            </p>
          </div>

          {/* Strategic About Narrative */}
          <div className="space-y-4 pt-2 border-l-2 border-primary/40 pl-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-foreground">3+ years</strong> of commercial experience engineering scalable web applications, robust REST/GraphQL APIs, relational database optimization (PostgreSQL), and defensive testing suites.
            </p>
            <p>
              <span className="text-primary font-medium">Actively transitioning into Applied AI Engineering:</span> AI agents and LLMs are probabilistic by nature; operating them safely in production demands deterministic backends, strict runtime schema validation (Zod), defensive security boundaries, and resilient retrieval pipelines (RAG with pgvector, Vercel AI SDK, LangChain).
            </p>
          </div>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap gap-4 pt-4 items-center">
            <Link
              href="#featured-project"
              className={cn("uppercase font-mono text-xs tracking-wider", buttonVariants({ size: "lg" }))}
            >
              Explore SprintHub <ArrowRight className="size-4 ml-1" />
            </Link>

            <Link
              href="#contact"
              className={cn(
                "uppercase font-mono text-xs tracking-wider",
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
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}
              >
                <Github className="size-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Send direct email"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Telemetry Terminal */}
        <div className="lg:col-span-5 relative">
          <div className="relative border border-border/60 bg-card/40 backdrop-blur-md p-6 font-mono text-xs text-muted-foreground shadow-2xl space-y-6">
            {/* Corner Tech Brackets */}
            <div className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-primary" />

            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-3 border-b border-border/40 text-[11px]">
              <span className="flex items-center gap-1.5 text-foreground font-semibold">
                <Terminal className="size-3.5 text-primary" /> SYS.MONITOR // NP-CORE
              </span>
              <span className="text-primary animate-pulse">● LIVE_FEED</span>
            </div>

            {/* Core Metrics */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Layers className="size-3 text-primary" /> BACKEND ARCHITECTURE
                  </span>
                  <span className="text-primary">MODULAR MONOLITH</span>
                </div>
                <div className="h-1.5 w-full bg-secondary overflow-hidden rounded-full">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Node 22 • Express 5 • Prisma 6 • Controller-Service-Repo
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Database className="size-3 text-primary" /> DATA INTEGRITY & TESTS
                  </span>
                  <span className="text-primary">&gt; 70% COV // ZERO-LEAK</span>
                </div>
                <div className="h-1.5 w-full bg-secondary overflow-hidden rounded-full">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  PostgreSQL 17 • Vitest • Jest • Supertest • Playwright
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Bot className="size-3 text-primary" /> APPLIED AI PIPELINE
                  </span>
                  <span className="text-primary">DETERMINISTIC GUARDS</span>
                </div>
                <div className="h-1.5 w-full bg-secondary overflow-hidden rounded-full">
                  <div className="h-full bg-primary w-[82%]"></div>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  pgvector • RAG Workflows • Vercel AI SDK • Zod Validation
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/40">
              <div className="p-3 border border-border/40 bg-background/50">
                <div className="text-2xl font-bold font-display text-foreground">03+</div>
                <div className="text-[10px] text-muted-foreground">YEARS COMMERCIAL EXP</div>
              </div>
              <div className="p-3 border border-border/40 bg-background/50">
                <div className="text-2xl font-bold font-display text-primary">100%</div>
                <div className="text-[10px] text-muted-foreground">MODULAR SAAS CODEBASE</div>
              </div>
            </div>

            <div className="text-center pt-1 text-[10px] text-muted-foreground">
              AUTH & RBAC: JWT + HttpOnly Cookies // Zero IDOR Tolerance
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
