import { HeaderNav } from "@/components/header-nav";
import { HeroSection } from "@/components/hero-section";
import { SprintHubCaseStudy } from "@/components/sprinthub-case-study";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <HeaderNav />

      {/* Hero & About Narrative */}
      <HeroSection />

      {/* Flagship Case Study: SprintHub */}
      <SprintHubCaseStudy />

      {/* Quantified Work Experience & Education */}
      <ExperienceSection />

      {/* Technical Stack Matrix across 6 Domains */}
      <TechStackSection />

      {/* Contact Channels & Transmission */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
