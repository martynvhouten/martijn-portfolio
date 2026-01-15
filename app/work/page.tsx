'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { TagFilter } from '@/components/TagFilter';
import { projects, getAllTags } from '@/content/projects';
import { t } from '@/lib/i18n';

export default function WorkPage() {
  const translations = t();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <>
      {/* Header */}
      <SectionWrapper size="default" className="pb-4 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.work.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.work.subtitle}
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mt-12">
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>
        
        {/* Result count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{filteredProjects.length}</span>
            {' '}project{filteredProjects.length !== 1 ? 'en' : ''}
          </p>
        </div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper size="lg" className="pt-4">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="mx-auto max-w-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-lg font-medium">{translations.work.noResults}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Probeer een andere filter.
              </p>
            </div>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
