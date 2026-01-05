/**
 * Navigation Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Sticky minimal top bar with essential links
 * - Teal accent for active/hover states
 * - Clean typography with generous spacing
 * - Language toggle support
 */

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-foreground hover:text-accent transition-smooth">
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-accent transition-smooth font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Side - Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-smooth ${
                language === 'en'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-smooth ${
                language === 'zh'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              中文
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="sm:hidden flex gap-2 mt-4 pt-4 border-t border-border">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  language === 'en'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:text-accent'
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('zh');
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  language === 'zh'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:text-accent'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
