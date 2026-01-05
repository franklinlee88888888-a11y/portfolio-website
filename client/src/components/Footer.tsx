/**
 * Footer Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Sparse layout with generous spacing
 * - Minimal contact info and links
 * - Clean typography
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">{t.footer.brand}</h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { label: t.nav.home, href: "#home" },
                { label: t.nav.projects, href: "#projects" },
                { label: t.nav.about, href: "#about" },
                { label: t.nav.contact, href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  hello@example.com
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-thin my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Portfolio. {t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-smooth">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-accent transition-smooth">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
