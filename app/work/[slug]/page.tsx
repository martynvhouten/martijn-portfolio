import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { projects, getProjectBySlug } from '@/content/projects';
import { t } from '@/lib/i18n';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project niet gevonden',
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const translations = t();

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {translations.project.backToWork}
          </Link>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="border-y border-border/40 bg-muted">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-200 dark:to-accent-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-accent-500/30 dark:text-accent-400/30">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sidebar - Project Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Role */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {translations.project.role}
                </h3>
                <p className="mt-1 font-medium">{project.role}</p>
              </div>

              {/* Period */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {translations.project.period}
                </h3>
                <p className="mt-1 font-medium">{project.period}</p>
              </div>

              {/* Stack */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {translations.project.stack}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight">
                {translations.project.challenge}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight">
                {translations.project.solution}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight">
                {translations.project.highlights}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery */}
      <SectionWrapper className="bg-muted/30">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
          {translations.project.gallery}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-200 dark:to-accent-300"
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-2xl font-bold text-accent-500/30 dark:text-accent-400/30">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Next Project */}
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {translations.project.nextProject}
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
          >
            {nextProject.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent-100/20 dark:from-primary/10 dark:via-primary/5 dark:to-accent-200/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.project.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.project.cta.text}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                {translations.project.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
