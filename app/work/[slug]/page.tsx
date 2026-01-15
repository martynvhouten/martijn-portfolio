import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { WebsitePreview } from '@/components/WebsitePreview';
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
      <section className="relative overflow-hidden bg-surface-2 dark:bg-surface-1">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {translations.project.backToWork}
          </Link>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="glass" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Website Preview or Hero Image Placeholder */}
      <section className="bg-surface-2 dark:bg-surface-1">
        <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
          {project.liveUrl ? (
            <WebsitePreview url={project.liveUrl} title={project.title} />
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200 shadow-premium dark:from-accent-100/20 dark:via-accent-200/15 dark:to-accent-300/10 dark:border-border/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.95_0.04_210/0.8),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-accent-400/20 dark:text-accent-400/15">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <SectionWrapper size="lg">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Sidebar - Project Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8 rounded-2xl border border-border/30 bg-surface-2 p-6 dark:bg-surface-1 dark:border-border/20">
              {/* Role */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {translations.project.role}
                </h3>
                <p className="mt-2 font-medium">{project.role}</p>
              </div>

              {/* Period */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {translations.project.period}
                </h3>
                <p className="mt-2 font-medium">{project.period}</p>
              </div>

              {/* Stack */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {translations.project.stack}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
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
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                De vraag
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                {translations.project.challenge}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                De oplossing
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                {translations.project.solution}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Highlights as result cards */}
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Het resultaat
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                {translations.project.highlights}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-border/30 bg-surface-2 p-4 dark:bg-surface-1 dark:border-border/20"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery */}
      <SectionWrapper size="lg" className="bg-surface-2 dark:bg-surface-1">
        <div className="text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Showcase
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {translations.project.gallery}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200/80 shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-1 dark:from-accent-100/20 dark:via-accent-200/15 dark:to-accent-300/10 dark:border-border/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.92_0.05_212/0.6),transparent_70%)]" />
              <div className="flex h-full items-center justify-center">
                <span className="text-3xl font-bold text-accent-400/25 dark:text-accent-400/20 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Next Project */}
      <SectionWrapper size="sm">
        <div className="rounded-2xl border border-border/30 bg-surface-2 p-8 transition-all duration-300 hover:shadow-premium dark:bg-surface-1 dark:border-border/20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <span className="text-sm text-muted-foreground">
                {translations.project.nextProject}
              </span>
              <p className="mt-1 text-lg font-semibold">{nextProject.title}</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href={`/work/${nextProject.slug}`}>
                Bekijk project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-accent-100/50 to-primary/5 dark:from-accent-100/10 dark:via-accent-200/5 dark:to-primary/5" />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-300/10" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
        
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.project.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.project.cta.text}
          </p>
          <div className="mt-8">
            <Button asChild variant="glow" size="xl">
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
