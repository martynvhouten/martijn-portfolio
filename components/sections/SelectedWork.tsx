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
    <SectionWrapper size="lg">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Portfolio
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.selectedWork.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {translations.selectedWork.subtitle}
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-14 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/work">
            {translations.selectedWork.viewAll}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
