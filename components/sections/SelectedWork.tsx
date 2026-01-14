import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/content/projects';
import { t } from '@/lib/i18n';

export function SelectedWork() {
  const translations = t();
  const selectedProjects = projects.slice(0, 4);

  return (
    <SectionWrapper>
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.selectedWork.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {translations.selectedWork.subtitle}
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/work">
            {translations.selectedWork.viewAll}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
