/**
 * Projects Section Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Alternating full-width and asymmetric layouts
 * - Divider lines between projects
 * - Gallery-like presentation
 * - Multi-language support
 */

import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: "/images/IMG_9438.jpg",
      tags: t.projects.project1.tags,
      link: "#",
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: "/images/Generated Image December 18, 2025 - 9_44AM.png",
      tags: t.projects.project2.tags,
      link: "#",
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      image: "/images/project-placeholder-3.png",
      tags: t.projects.project3.tags,
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-heading text-foreground mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard
                {...project}
                reversed={index % 2 === 1}
              />
              {index < projects.length - 1 && (
                <div className="divider-thin my-16 md:my-24"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
