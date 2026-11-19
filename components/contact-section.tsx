"use client";

import { useState } from "react";
import { Container } from "@/components/zippystarter/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Copy,
  Check,
  Send,
  FileDown,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || "Recruiter"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <Container
      id="contact"
      component="section"
      wrapperClassName="py-24 bg-card/40 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-3">
              <Mail className="size-3.5" />
              <span>DIRECT CHANNELS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tighter text-foreground">
              INITIATE_CONTACT<span className="text-primary">_</span>
            </h2>
            <p className="text-muted-foreground text-sm font-mono mt-3 leading-relaxed">
              Open to technical interview processes, senior engineering roles, contract work, and nearshore/international remote teams. Let&apos;s build high-impact software.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Direct Email Card */}
            <div className="p-4 border border-border bg-background flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground block">PRIMARY EMAIL</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-foreground hover:text-primary transition-colors font-semibold"
                >
                  {profile.email}
                </a>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="gap-1.5 text-xs font-mono"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-3 text-primary" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3" /> Copy
                  </>
                )}
              </Button>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 border border-border bg-background flex items-center gap-3">
              <MapPin className="size-4 text-primary shrink-0" />
              <div>
                <span className="text-[10px] text-muted-foreground block">LOCATION & WORKSPACE</span>
                <span className="text-foreground font-semibold">{profile.location}</span>
              </div>
            </div>

            {/* Phone */}
            {profile.phone && (
              <div className="p-4 border border-border bg-background flex items-center gap-3">
                <Phone className="size-4 text-primary shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-foreground block">DIRECT PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-foreground hover:text-primary transition-colors font-semibold"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-background hover:border-primary transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="size-4 text-primary" /> LinkedIn
                </span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-background hover:border-primary transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Github className="size-4 text-primary" /> GitHub
                </span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>
            </div>

            {/* CV Download banner */}
            <a
              href={profile.cvPath}
              download={profile.cvFilename}
              className="mt-4 block p-4 border border-primary/40 bg-primary/10 hover:bg-primary/15 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <FileDown className="size-4" />
                  <span>DOWNLOAD COMPLETE CV (PDF)</span>
                </div>
                <span className="text-[10px] text-muted-foreground">PDF FORMAT</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Transmission Form (7 Cols) */}
        <div className="lg:col-span-7 border border-border bg-background p-6 md:p-8 space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="text-xl font-display font-bold text-foreground">
              TRANSMIT_MESSAGE
            </h3>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Direct dispatch to {profile.email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-muted-foreground block text-[11px]">
                  YOUR NAME // RECRUITER OR TEAM
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Connor / Tech Lead"
                  className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-muted-foreground block text-[11px]">
                  REPLY EMAIL ADDRESS
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sconnor@enterprise.com"
                  className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-muted-foreground block text-[11px]">
                TRANSMISSION CONTENT // ROLE DETAILS, SPRINT, OR PROPOSAL
              </label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="We are looking for a Full Stack Software Engineer to build scalable microservices and integrate LLM agents..."
                className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-primary min-h-[140px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-none font-mono text-xs uppercase tracking-wider font-semibold gap-2 py-3"
            >
              <Send className="size-3.5" /> Send Transmission
            </Button>

            {formSubmitted && (
              <p className="text-primary text-[11px] text-center pt-2">
                ✓ Transmission client initialized! Your email client has been opened.
              </p>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}
