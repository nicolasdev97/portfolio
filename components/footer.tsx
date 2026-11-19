import { Container } from "@/components/zippystarter/container";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

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
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Github className="size-3.5" /> GITHUB
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="size-3.5" /> LINKEDIN
          </a>
          <a
            href={profile.socials.email}
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Mail className="size-3.5" /> EMAIL
          </a>
          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            className="hover:text-primary transition-colors"
          >
            CV_PDF
          </a>
        </div>
      </div>
    </Container>
  );
}
