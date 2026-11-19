"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/zippystarter/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Copy,
  Check,
  ShieldCheck,
  Layers,
  Zap,
  Bot,
  Sparkles,
  CheckCircle2,
  Lock,
  Terminal,
  FileCode,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function SprintHubCaseStudy() {
  const project = PORTFOLIO_DATA.featuredProject;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"architecture" | "security" | "realtime" | "ai">("architecture");

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <Container
      id="featured-project"
      component="section"
      wrapperClassName="scroll-mt-16 py-24 border-t border-border bg-card/20"
      className="mx-auto max-w-7xl flex-1"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
            <Sparkles className="size-3.5" />
            <span>FLAGSHIP ARCHITECTURE & CASE STUDY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tighter text-foreground">
            SPRINTHUB<span className="text-primary">_</span>
          </h2>
          <p className="text-base md:text-lg font-mono text-muted-foreground mt-2 max-w-2xl">
            {project.tagline}
          </p>
        </div>

        {/* Live CTA links */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Launch SprintHub Live Demo in a new tab"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-semibold rounded-none hover:bg-primary/90 transition-colors shadow-lg"
          >
            Live Demo <ExternalLink className="size-3.5" />
          </Link>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View SprintHub Monorepo & Architecture Docs (SAD / ADRs) on GitHub"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-background text-foreground font-mono text-xs uppercase tracking-wider font-medium rounded-none hover:border-primary hover:text-primary transition-colors"
          >
            GitHub & Docs (SAD / ADRs) <Github className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Grid: Architecture Overview & Credentials */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Deep Technical Breakdown & Tabs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Executive Summary */}
          <div className="border border-border bg-background p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                &#47;&#47; SYSTEM ARCHITECTURE BREAKDOWN
              </span>
              <span className="font-mono text-xs text-primary font-medium">
                PRODUCTION-GRADE MONOREPO
              </span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tags Matrix */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[11px] rounded-none border border-border/60 bg-secondary/60 hover:border-primary/50 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Interactive Pillars Explorer */}
          <div className="border border-border bg-background">
            {/* Tab navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border bg-secondary/30">
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                title="Explore Monorepo & Modular Monolith architecture"
                className={`flex items-center justify-center gap-2 py-3 px-2 text-xs font-mono transition-colors border-r border-border cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-background text-primary border-b-2 border-b-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="size-3.5 shrink-0" />
                <span className="truncate">1. Architecture</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("security")}
                title="Explore Contextual RBAC & defensive security policies"
                className={`flex items-center justify-center gap-2 py-3 px-2 text-xs font-mono transition-colors border-r border-border cursor-pointer ${
                  activeTab === "security"
                    ? "bg-background text-primary border-b-2 border-b-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ShieldCheck className="size-3.5 shrink-0" />
                <span className="truncate">2. Defensive Security</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("realtime")}
                title="Explore Server-Sent Events, OpenAPI 3.0 & test pyramid"
                className={`flex items-center justify-center gap-2 py-3 px-2 text-xs font-mono transition-colors border-r border-border cursor-pointer ${
                  activeTab === "realtime"
                    ? "bg-background text-primary border-b-2 border-b-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Zap className="size-3.5 shrink-0" />
                <span className="truncate">3. Real-time & Tests</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ai")}
                title="Explore Applied AI roadmap with pgvector & Vercel AI SDK"
                className={`flex items-center justify-center gap-2 py-3 px-2 text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === "ai"
                    ? "bg-background text-primary border-b-2 border-b-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bot className="size-3.5 shrink-0" />
                <span className="truncate">4. Applied AI</span>
              </button>
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold flex items-center gap-1.5">
                      <Terminal className="size-4 text-primary" /> Monorepo & Modular Monolith
                    </span>
                    <span className="text-primary font-mono text-[11px]">Controller → Service → Repository</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.pillars?.architecture}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Backend Core:</div>
                      <div className="text-muted-foreground">Node.js 22 • Express 5 • Prisma 6 ORM • PostgreSQL 17</div>
                    </div>
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Frontend Client:</div>
                      <div className="text-muted-foreground">Next.js 15 (App Router) • React 19 • Tailwind CSS • Docker</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold flex items-center gap-1.5">
                      <Lock className="size-4 text-primary" /> Multi-Tenant Defense & RBAC
                    </span>
                    <span className="text-primary font-mono text-[11px]">Zero-Trust Perimeter</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.pillars?.security}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Contextual RBAC:</div>
                      <div className="text-muted-foreground">Tenant isolation (OWNER, ADMIN, MEMBER) with fine-grained authorization policies.</div>
                    </div>
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Schema Invariants:</div>
                      <div className="text-muted-foreground">Strict Zod parsing across all ingress endpoints preventing IDOR & prototype pollution.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "realtime" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold flex items-center gap-1.5">
                      <FileCode className="size-4 text-primary" /> Real-Time Sync, OpenAPI & Test Pyramids
                    </span>
                    <span className="text-primary font-mono text-[11px]">Contract-First Engineering</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.pillars?.realTimeAndQuality}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Real-Time Events:</div>
                      <div className="text-muted-foreground">SSE stream at /api/events + BroadcastChannel for multi-tab optimistic updates.</div>
                    </div>
                    <div className="p-3 border border-border/60 bg-card/40">
                      <div className="text-primary font-semibold mb-1">Documentation & Tests:</div>
                      <div className="text-muted-foreground">OpenAPI 3.0 / Swagger UI at /api/docs + Vitest, Jest, Supertest & Playwright E2E.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold flex items-center gap-1.5">
                      <Bot className="size-4 text-primary" /> Applied AI Engineering Roadmap
                    </span>
                    <span className="text-primary font-mono text-[11px]">Probabilistic + Deterministic</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.pillars?.aiRoadmap}
                  </p>
                  <div className="p-4 border border-primary/30 bg-primary/5 text-xs font-mono space-y-2">
                    <div className="text-primary font-semibold flex items-center gap-2">
                      <CheckCircle2 className="size-4" /> Next Milestone Architecture:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Leveraging PostgreSQL 17 with the <code className="text-primary">pgvector</code> extension for embedding storage and semantic issue retrieval. LLM interactions are bound by deterministic Zod guardrails via the Vercel AI SDK to enforce schema compliance on agentic sprint planning.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Demo Credentials Box & System Specs */}
        <div className="lg:col-span-4 space-y-6">
          {/* Frictionless Demo Access */}
          <div className="border border-primary/50 bg-card p-6 shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
                <Lock className="size-3.5 text-primary" /> INSTANT DEMO ACCESS
              </span>
              <span className="text-[10px] font-mono text-primary font-bold">1-CLICK COPY</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3 mb-4 leading-relaxed">
              Explore both multi-tenant privilege levels directly without creating a throwaway account:
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Admin / Owner Account */}
              <div className="p-3 border border-border bg-background space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-primary">
                  <span>{project.demoCredentials?.admin.role}</span>
                  <Badge variant="outline" className="text-[10px] py-0 border-primary/40 text-primary">FULL PERMISSIONS</Badge>
                </div>
                <div className="flex items-center justify-between bg-secondary/40 px-2.5 py-1.5 border border-border/40">
                  <span className="text-muted-foreground select-all truncate mr-2">
                    {project.demoCredentials?.admin.email}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 shrink-0 text-muted-foreground hover:text-primary"
                    onClick={() => handleCopy(project.demoCredentials?.admin.email || "", "admin-email")}
                    title="Copy admin email (admin@sprinthub.dev) to clipboard"
                    aria-label="Copy admin email"
                  >
                    {copiedKey === "admin-email" ? <Check className="size-3 text-primary" /> : <Copy className="size-3" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between bg-secondary/40 px-2.5 py-1.5 border border-border/40">
                  <span className="text-muted-foreground select-all truncate mr-2">
                    {project.demoCredentials?.admin.password}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 shrink-0 text-muted-foreground hover:text-primary"
                    onClick={() => handleCopy(project.demoCredentials?.admin.password || "", "admin-pass")}
                    title="Copy admin password (Password123!) to clipboard"
                    aria-label="Copy admin password"
                  >
                    {copiedKey === "admin-pass" ? <Check className="size-3 text-primary" /> : <Copy className="size-3" />}
                  </Button>
                </div>
              </div>

              {/* Dev / Member Account */}
              <div className="p-3 border border-border bg-background space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-foreground">
                  <span>{project.demoCredentials?.dev.role}</span>
                  <Badge variant="outline" className="text-[10px] py-0 text-muted-foreground">STANDARD ACCESS</Badge>
                </div>
                <div className="flex items-center justify-between bg-secondary/40 px-2.5 py-1.5 border border-border/40">
                  <span className="text-muted-foreground select-all truncate mr-2">
                    {project.demoCredentials?.dev.email}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 shrink-0 text-muted-foreground hover:text-primary"
                    onClick={() => handleCopy(project.demoCredentials?.dev.email || "", "dev-email")}
                    title="Copy dev email (dev@sprinthub.dev) to clipboard"
                    aria-label="Copy dev email"
                  >
                    {copiedKey === "dev-email" ? <Check className="size-3 text-primary" /> : <Copy className="size-3" />}
                  </Button>
                </div>
                <div className="flex items-center justify-between bg-secondary/40 px-2.5 py-1.5 border border-border/40">
                  <span className="text-muted-foreground select-all truncate mr-2">
                    {project.demoCredentials?.dev.password}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 shrink-0 text-muted-foreground hover:text-primary"
                    onClick={() => handleCopy(project.demoCredentials?.dev.password || "", "dev-pass")}
                    title="Copy dev password (Password123!) to clipboard"
                    aria-label="Copy dev password"
                  >
                    {copiedKey === "dev-pass" ? <Check className="size-3 text-primary" /> : <Copy className="size-3" />}
                  </Button>
                </div>
              </div>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Launch SprintHub in production (opens in new tab)"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:bg-primary/90 transition-colors"
            >
              Launch Live App <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Key Engineering Pillars Checklist */}
          <div className="border border-border bg-background p-6 font-mono text-xs space-y-3">
            <div className="font-semibold text-foreground border-b border-border pb-2 flex items-center justify-between">
              <span>SECURITY & SPECS</span>
              <span className="text-primary font-bold">100% TS</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>Zero-leak HttpOnly JWT authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>Modular Repository pattern with Prisma 6</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>Live SSE broadcasts & tab synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>Swagger 3.0 / OpenAPI contract documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
