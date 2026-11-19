import { Container } from "@/components/zippystarter/container";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Github, Linkedin, FileDown, MapPin } from "lucide-react";

export function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <Container
      component="footer"
      className="py-12 border-t border-border bg-background text-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left space-y-1">
          <div className="text-xs font-mono font-bold text-foreground tracking-wider">
            © {new Date().getFullYear()} {profile.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
            <MapPin className="size-3 text-primary" /> {profile.location}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile (@nicolasdev97) — Open in new tab"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Github className="size-3.5" /> GITHUB
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile (Nicolás Palacio) — Open in new tab"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="size-3.5" /> LINKEDIN
          </a>
          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            target="_blank"
            rel="noopener noreferrer"
            title="Download Nicolás Palacio's CV (PDF)"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <FileDown className="size-3.5" /> CV_PDF
          </a>
        </div>
      </div>
    </Container>
  );
}
