"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/zippystarter/container";
import { FileDown, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about", id: "about" },
  { label: "SprintHub", href: "#featured-project", id: "featured-project" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Tech Stack", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (id: string, href: string) => {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(id, href);
  };

  useEffect(() => {
    const handleScroll = () => {
      // At the top of the page, "about" is actively selected
      if (window.scrollY < 120) {
        setActiveSection("about");
        return;
      }

      // Check if user has reached bottom of page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Viewport target line for active section detection (just below fixed header)
      const viewportTarget = 160;
      let current = "about";

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section covers the viewport target line according to its size
          if (rect.top <= viewportTarget && rect.bottom > viewportTarget) {
            current = item.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      component="header"
      wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border"
      className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
    >
      <Link
        href="#about"
        onClick={(e) => handleNavClick(e, "about", "#about")}
        title="Nicolás Palacio — Scroll to top"
        className="text-lg md:text-xl font-bold font-mono tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-1 cursor-pointer"
      >
        <span>Nicolás</span>
        <span className="text-primary">_</span>
        <span>Palacio</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id, item.href)}
              title={`Jump to ${item.label} section`}
              className={cn(
                "transition-colors hover:text-foreground cursor-pointer",
                isActive
                  ? "text-foreground font-semibold underline underline-offset-4"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2.5">
        {/* Dark / Light Mode Switcher */}
        <ThemeToggle />

        {/* CV Download Button */}
        <a
          href={PORTFOLIO_DATA.profile.cvPath}
          download={PORTFOLIO_DATA.profile.cvFilename}
          title="Download Nicolás Palacio's CV (PDF)"
          className="inline-flex"
        >
          <Button
            variant="outline"
            size="sm"
            title="Download Nicolás Palacio's CV (PDF)"
            className="font-mono text-xs border-border/80 text-foreground hover:bg-secondary hover:text-foreground hover:border-primary gap-1.5 cursor-pointer rounded-none"
          >
            <FileDown className="size-3.5 text-primary" />
            <span className="hidden sm:inline">RESUME / CV</span>
            <span className="sm:hidden">CV</span>
          </Button>
        </a>

        {/* Mobile menu trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          title="Toggle navigation menu"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border py-4 px-6 flex flex-col gap-4 text-sm font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id, item.href)}
                className={cn(
                  "transition-colors py-2 border-b border-border/40 cursor-pointer",
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
}
