import { Container } from "@/components/zippystarter/container";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function ExperienceSection() {
  const { experience, education, languages } = PORTFOLIO_DATA;

  return (
    <Container
      id="experience"
      component="section"
      wrapperClassName="scroll-mt-16 py-24 border-t border-border bg-background"
      className="mx-auto max-w-7xl flex-1"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
            <TrendingUp className="size-3.5" />
            <span>TRACK RECORD & QUANTIFIABLE IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tighter text-foreground">
            EXPERIENCE<span className="text-primary">_</span>
          </h2>
          <div className="h-1 w-24 bg-primary mt-3"></div>
        </div>
        <p className="text-muted-foreground max-w-md text-sm font-mono leading-relaxed">
          Proven history delivering resilient distributed backends, scalable SaaS platforms, and defensive testing pyramids with measurable business impact.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left: Professional Experience Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary pb-2 border-b border-border">
            <Briefcase className="size-4" />
            <span>COMMERCIAL ENGINEERING ROLES</span>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-border/60">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8 space-y-4">
                {/* Timeline node icon */}
                <div className="absolute left-1.5 top-1 size-3.5 rounded-full border-2 border-primary bg-background -translate-x-1/2"></div>

                <div className="border border-border/80 bg-card/60 p-6 space-y-4 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                    <div>
                      <h3 className="text-xl font-display text-foreground font-bold">
                        {job.role}
                      </h3>
                      <div className="text-sm font-mono text-primary font-medium">
                        {job.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end font-mono text-xs text-muted-foreground gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3 text-primary" /> {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-primary" /> {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements with highlighted metrics */}
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    {job.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Job Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-[10px] rounded-none py-0.5 bg-secondary/50 text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education & Languages (4 Cols) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Education Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary pb-2 border-b border-border">
              <GraduationCap className="size-4" />
              <span>EDUCATION & DEGREES</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="border border-border/80 bg-card/60 p-5 space-y-2 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-base font-display font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-primary">
                    {edu.institution}
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground pt-2 border-t border-border/40">
                    <span>{edu.location}</span>
                    <span>{edu.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary pb-2 border-b border-border">
              <Globe className="size-4" />
              <span>LANGUAGES & COMMUNICATION</span>
            </div>

            <div className="border border-border/80 bg-card/60 p-5 space-y-3 font-mono text-xs">
              {languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="flex items-center justify-between py-2 border-b border-border/40 last:border-b-0"
                >
                  <span className="font-semibold text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground text-[11px]">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Engineering Mindset Box */}
          <div className="border border-primary/30 bg-primary/5 p-5 space-y-2 font-mono text-xs">
            <div className="text-primary font-bold uppercase tracking-wider">
              &#47;&#47; PRODUCTION GUARANTEE
            </div>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Every system built adheres to strict architectural boundaries, explicit runtime typing (Zod), isolated database transactions, and comprehensive test coverage.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
