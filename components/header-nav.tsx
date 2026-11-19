"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/zippystarter/container";
import { FileDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container
      component="header"
      wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border"
      className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
    >
      <Link
        href="#"
        className="text-lg md:text-xl font-bold font-mono tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-1"
      >
        <span>Nicolás</span>
        <span className="text-primary">_</span>
        <span>Palacio</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-muted-foreground">
        <Link
          href="#about"
          className="hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          &#47;&#47; About
        </Link>
        <Link
          href="#featured-project"
          className="hover:text-primary transition-colors hover:underline underline-offset-4 text-foreground font-semibold"
        >
          &#47;&#47; SprintHub
        </Link>
        <Link
          href="#experience"
          className="hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          &#47;&#47; Experience
        </Link>
        <Link
          href="#skills"
          className="hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          &#47;&#47; Tech Stack
        </Link>
        <Link
          href="#contact"
          className="hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          &#47;&#47; Contact
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href={PORTFOLIO_DATA.profile.cvPath}
          download={PORTFOLIO_DATA.profile.cvFilename}
          className="inline-flex"
        >
          <Button
            variant="outline"
            size="sm"
            className="font-mono text-xs border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary gap-1.5 cursor-pointer"
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
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border py-4 px-6 flex flex-col gap-4 text-sm font-mono">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-border/40"
          >
            &#47;&#47; About
          </Link>
          <Link
            href="#featured-project"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-border/40 font-bold text-foreground"
          >
            &#47;&#47; SprintHub (Featured SaaS)
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-border/40"
          >
            &#47;&#47; Experience & Education
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2 border-b border-border/40"
          >
            &#47;&#47; Tech Stack Matrix
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition-colors py-2"
          >
            &#47;&#47; Contact
          </Link>
        </div>
      )}
    </Container>
  );
}
