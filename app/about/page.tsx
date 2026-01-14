import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

const translations = t();

export const metadata: Metadata = {
  title: translations.about.title,
  description: translations.about.bio[0],
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper className="pb-12 pt-16">
        <div className="mx-auto max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.about.title}
          </h1>

          {/* Intro */}
          <p className="mt-6 text-2xl font-medium text-primary">
            {translations.about.intro}
          </p>

          {/* Bio paragraphs */}
          <div className="mt-8 space-y-6">
            {translations.about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Profile Image Placeholder */}
      <SectionWrapper className="py-12">
        <div className="mx-auto max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-200 dark:to-accent-300">
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-accent-500/30 dark:text-accent-400/30">
                M
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">
            {translations.about.skills.title}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {translations.about.skills.items.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent-100/20 dark:from-primary/10 dark:via-primary/5 dark:to-accent-200/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            {translations.about.cta.title}
          </h2>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                {translations.about.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
