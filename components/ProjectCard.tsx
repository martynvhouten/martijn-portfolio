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
        'group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        className
      )}
    >
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-200 dark:to-accent-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-accent-500/30 dark:text-accent-400/30">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/10">
          <ArrowUpRight className="h-8 w-8 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
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
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Year */}
        <p className="mt-4 text-xs text-muted-foreground">{project.year}</p>
      </div>
    </Link>
  );
}
