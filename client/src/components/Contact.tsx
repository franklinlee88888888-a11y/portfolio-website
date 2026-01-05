/**
 * Contact Section Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Centered layout with large typography
 * - Minimal contact form with essential fields
 * - Social links and email contact
 * - Multi-language support
 */

import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:franklinlee88888888@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "https://github.com/franklinlee88888888-a11y" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-smooth"
              placeholder={t.contact.namePlaceholder}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-smooth"
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-smooth resize-none"
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-smooth"
          >
            {t.contact.send}
          </Button>
        </form>

        {/* Divider */}
        <div className="divider-thin my-12"></div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">{t.contact.connectSocial}</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-3 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-smooth"
                  title={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
