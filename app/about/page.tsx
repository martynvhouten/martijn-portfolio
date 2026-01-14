import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Palette, Zap, Search, Smartphone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

const translations = t();

const skillIcons = [Code, Palette, Zap, Search, Smartphone, Heart];

export const metadata: Metadata = {
  title: translations.about.title,
  description: translations.about.bio[0],
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper size="lg" className="pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
            {/* Decorative elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-200/50 to-accent-300/30 blur-2xl dark:from-accent-300/20 dark:to-accent-400/10" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200 shadow-premium dark:from-accent-100/20 dark:via-accent-200/15 dark:to-accent-300/10 dark:border-border/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.95_0.04_210/0.8),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.88_0.07_214/0.6),transparent_50%)]" />
              <div className="flex h-full items-center justify-center">
                <span className="text-8xl font-bold text-accent-400/25 dark:text-accent-400/20">
                  M
                </span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Over mij
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {translations.about.intro}
            </h1>

            {/* Bio paragraphs */}
            <div className="mt-8 space-y-5">
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
        </div>
      </SectionWrapper>

      {/* Skills as cards */}
      <SectionWrapper size="lg" className="bg-surface-2 dark:bg-surface-1">
        <div className="text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            {translations.about.skills.title}
          </h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {translations.about.skills.items.map((skill, index) => {
            const Icon = skillIcons[index] || Code;
            return (
              <div
                key={skill}
                className="group flex items-center gap-4 rounded-2xl border border-border/30 bg-card p-5 transition-all duration-300 hover:border-accent-300/50 hover:shadow-premium hover:-translate-y-0.5 dark:border-border/20 dark:hover:border-accent-400/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-100 to-accent-200/50 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground dark:from-accent-200/30 dark:to-accent-300/20">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{skill}</span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Values / What I believe */}
      <SectionWrapper size="lg">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Werkwijze
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Waar ik in geloof
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Kwaliteit', description: 'Geen compromissen. Elk detail telt.' },
              { title: 'Communicatie', description: 'Helder, eerlijk en direct.' },
              { title: 'Resultaat', description: 'Websites die écht werken.' },
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-100 to-accent-200/50 text-xl font-bold text-primary dark:from-accent-200/30 dark:to-accent-300/20">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
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
            {translations.about.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Laten we kennismaken en bespreken hoe ik jou kan helpen.
          </p>
          <div className="mt-8">
            <Button asChild variant="glow" size="xl">
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
