/**
 * Project Card Component
 * 
 * Design Philosophy: Modern Minimalist
 * - Clean card design with subtle shadows
 * - Hover effects that reveal additional details
 * - Asymmetric layout with image and content
 * - Multi-language support
 */

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  reversed?: boolean;
  viewProjectLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link = "#",
  reversed = false,
  viewProjectLabel,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const label = viewProjectLabel || t.projects.viewProject;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-16 group ${
        reversed ? "md:grid-cols-2 md:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-auto md:h-96">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-4 ${reversed ? "md:[direction:ltr]" : ""}`}>
        <div>
          <h3 className="text-heading text-foreground mb-3">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            variant="ghost"
            className="text-accent hover:text-accent hover:bg-accent/10 font-semibold p-0 h-auto flex items-center gap-2 group/btn"
          >
            {label}
            <ArrowUpRight
              size={20}
              className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
