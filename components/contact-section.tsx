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
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const buildEmailDraft = () => {
    const subject = `Portfolio Inquiry from ${formData.name.trim() || "Recruiter / Team"}`;
    const body = `Hi Nicolás,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return { subject, body, gmailUrl, mailtoUrl };
  };

  const handleCopyDraft = () => {
    const { subject, body } = buildEmailDraft();
    const fullDraft = `To: ${profile.email}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { gmailUrl, mailtoUrl } = buildEmailDraft();

    // Try opening Gmail Web directly in a new tab (works reliably in all browsers)
    const newTab = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // If popup was blocked or user prefers native client, fallback to mailto protocol
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      window.location.href = mailtoUrl;
    }

    setFormSubmitted(true);
  };

  const { gmailUrl, mailtoUrl } = buildEmailDraft();

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-foreground text-xs font-mono mb-3">
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
                  title={`Send email to ${profile.email}`}
                  className="text-foreground hover:underline font-semibold"
                >
                  {profile.email}
                </a>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                title={`Copy ${profile.email} to clipboard`}
                className="gap-1.5 text-xs font-mono rounded-none"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-3 text-emerald-500" /> Copied
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
              <MapPin className="size-4 text-foreground shrink-0" />
              <div>
                <span className="text-[10px] text-muted-foreground block">LOCATION & WORKSPACE</span>
                <span className="text-foreground font-semibold">{profile.location}</span>
              </div>
            </div>

            {/* Phone */}
            {profile.phone && (
              <div className="p-4 border border-border bg-background flex items-center gap-3">
                <Phone className="size-4 text-foreground shrink-0" />
                <div>
                  <span className="text-[10px] text-muted-foreground block">DIRECT PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
                    title={`Call or message ${profile.phone}`}
                    className="text-foreground hover:underline font-semibold"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Social Links: GitHub 1st, LinkedIn 2nd (Consistent with Hero & Footer) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile (@nicolasdev97) — Open in new tab"
                className="p-3 border border-border bg-background hover:border-foreground/50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Github className="size-4 text-foreground" /> GitHub
                </span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile (Nicolás Palacio) — Open in new tab"
                className="p-3 border border-border bg-background hover:border-foreground/50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="size-4 text-foreground" /> LinkedIn
                </span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>
            </div>

            {/* CV Download banner */}
            <a
              href={profile.cvPath}
              download={profile.cvFilename}
              title="Download complete CV in PDF format"
              className="mt-4 block p-4 border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-foreground font-semibold">
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
                  className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-foreground"
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
                  className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-foreground"
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
                className="rounded-none font-mono text-xs bg-card/40 border-border focus:border-foreground min-h-[140px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              title="Dispatch email transmission to Nicolás Palacio"
              className="w-full rounded-none font-mono text-xs uppercase tracking-wider font-semibold gap-2 py-3 cursor-pointer"
            >
              <Send className="size-3.5" /> Send Transmission
            </Button>

            {/* Interactive Feedback & Direct Client Options */}
            {formSubmitted ? (
              <div className="p-4 border border-border bg-secondary/30 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Sparkles className="size-4 text-emerald-500" />
                  <span>TRANSMISSION DISPATCH INITIALIZED</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We opened your email client with the draft prepared. If your browser didn&apos;t open it automatically, choose an option below:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open email draft directly in Gmail Web (new tab)"
                    className="px-3 py-1.5 border border-border bg-background hover:border-foreground text-foreground text-[11px] font-mono font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Open in Gmail Web <ExternalLink className="size-3" />
                  </a>

                  <a
                    href={mailtoUrl}
                    title="Open email draft in your system's default email client"
                    className="px-3 py-1.5 border border-border bg-background hover:border-foreground text-foreground text-[11px] font-mono font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Default Email App <Mail className="size-3" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    title="Copy complete email draft to clipboard"
                    className={cn(
                      "px-3 py-1.5 border border-border bg-background hover:border-foreground text-foreground text-[11px] font-mono font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer",
                      copiedDraft && "border-emerald-500 text-emerald-400"
                    )}
                  >
                    {copiedDraft ? (
                      <>
                        Draft Copied! <Check className="size-3 text-emerald-400" />
                      </>
                    ) : (
                      <>
                        Copy Full Draft <Copy className="size-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                <span>Direct delivery to {profile.email}</span>
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  disabled={!formData.message}
                  title="Copy message draft to clipboard"
                  className="hover:text-foreground underline underline-offset-2 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {copiedDraft ? "✓ Copied to clipboard" : "Copy draft to clipboard"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}
