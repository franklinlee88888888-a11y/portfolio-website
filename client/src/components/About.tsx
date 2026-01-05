/**
 * About Section Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Asymmetric layout with text on left, skills on right
 * - Clean typography and generous spacing
 * - Subtle accent colors for emphasis
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { category: t.about.design, items: t.about.designSkills },
    { category: t.about.frontend, items: t.about.frontendSkills },
    { category: t.about.backend, items: t.about.backendSkills },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <h2 className="text-heading text-foreground">{t.about.title}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-subheading text-foreground mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background text-foreground border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
