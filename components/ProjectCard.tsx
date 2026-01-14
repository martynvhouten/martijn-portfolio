import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all duration-300 hover:border-accent-300/50 hover:shadow-premium-lg hover:-translate-y-1 dark:border-border/30 dark:hover:border-accent-400/30',
        className
      )}
    >
      {/* Image placeholder with mesh gradient */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200/80 dark:from-accent-100 dark:via-accent-200 dark:to-accent-300/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.95_0.04_210/0.8),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.88_0.07_214/0.6),transparent_50%)]" />
        
        {/* Project initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-accent-500/20 dark:text-accent-400/20 transition-transform duration-300 group-hover:scale-110">
            {project.title.charAt(0)}
          </span>
        </div>
        
        {/* Hover overlay with blur */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-primary/5 group-hover:backdrop-blur-[2px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75 dark:bg-card/90">
            <ArrowUpRight className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] font-normal px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Year with subtle divider */}
        <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4 dark:border-border/20">
          <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
          <span className="text-xs text-muted-foreground/60 group-hover:text-primary transition-colors">
            Bekijk project →
          </span>
        </div>
      </div>
    </Link>
  );
}
