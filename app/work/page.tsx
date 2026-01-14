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
      <SectionWrapper className="pb-8 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.work.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.work.subtitle}
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mt-10">
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        </div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper className="pt-4">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">{translations.work.noResults}</p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
