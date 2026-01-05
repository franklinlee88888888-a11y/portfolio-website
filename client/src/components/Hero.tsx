/**
 * Hero Section Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Asymmetric layout with large typography on left
 * - Subtle gradient shape on right
 * - Generous whitespace and breathing room
 * - Multi-language support
 */

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column - Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8 z-10">
          <div className="space-y-4">
            <h1 className="text-display text-foreground leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 flex items-center gap-2 group"
            >
              {t.hero.viewWork}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground/5 font-semibold rounded-full px-8"
            >
              {t.hero.getInTouch}
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-accent">50+</p>
              <p className="text-sm text-muted-foreground">{t.hero.projectsCompleted}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">5+</p>
              <p className="text-sm text-muted-foreground">{t.hero.yearsExperience}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">20+</p>
              <p className="text-sm text-muted-foreground">{t.hero.happyClients}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Element (Background Image) */}
        <div className="hidden lg:block relative h-96">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
