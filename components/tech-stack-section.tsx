import { Container } from "@/components/zippystarter/container";
import {
  Database,
  Bot,
  ShieldCheck,
  Server,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function TechStackSection() {
  const { skillsMatrix } = PORTFOLIO_DATA;

  return (
    <Container
      id="skills"
      component="section"
      wrapperClassName="py-24 bg-secondary/15 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left Column: Heading & Engineering Philosophy (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono">
            <Sparkles className="size-3.5" />
            <span>FULL SPECTRUM TOOLKIT</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display tracking-tighter text-foreground">
            TECH_STACK<span className="text-primary">_</span>
          </h2>

          <p className="text-muted-foreground text-sm font-mono leading-relaxed">
            Engineered around determinism, strong type safety, and resilience. Specialized in Node.js/TypeScript backends, relational data modeling, defensive testing, and applied AI agent pipelines.
          </p>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 border border-border bg-background flex flex-col items-center justify-center text-center aspect-square hover:border-primary transition-colors">
              <Server className="h-7 w-7 mb-2 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground">MODULAR_BACKEND</span>
              <span className="font-mono text-[10px] text-muted-foreground mt-1">Node 22 • Prisma 6</span>
            </div>

            <div className="p-4 border border-border bg-background flex flex-col items-center justify-center text-center aspect-square hover:border-primary transition-colors">
              <Database className="h-7 w-7 mb-2 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground">RELATIONAL_DB</span>
              <span className="font-mono text-[10px] text-muted-foreground mt-1">Postgres 17 • Indexing</span>
            </div>

            <div className="p-4 border border-border bg-background flex flex-col items-center justify-center text-center aspect-square hover:border-primary transition-colors">
              <Bot className="h-7 w-7 mb-2 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground">APPLIED_AI</span>
              <span className="font-mono text-[10px] text-muted-foreground mt-1">RAG • pgvector • SDK</span>
            </div>

            <div className="p-4 border border-border bg-background flex flex-col items-center justify-center text-center aspect-square hover:border-primary transition-colors">
              <ShieldCheck className="h-7 w-7 mb-2 text-primary" />
              <span className="font-mono text-xs font-semibold text-foreground">DEFENSIVE_TESTS</span>
              <span className="font-mono text-[10px] text-muted-foreground mt-1">Playwright • Vitest</span>
            </div>
          </div>
        </div>

        {/* Right Column: 6 Engineering Domains (8 Cols) */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
          {skillsMatrix.map((domain, idx) => (
            <div
              key={idx}
              className="border border-border/80 bg-background/80 p-6 space-y-4 hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-primary/30">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {domain.category}
                  </h3>
                  <span className="font-mono text-[11px] text-primary">0{idx + 1}</span>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-2 mb-4">
                  {domain.description}
                </p>

                <ul className="space-y-2">
                  {domain.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between text-xs font-mono group"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[1px] w-8 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
