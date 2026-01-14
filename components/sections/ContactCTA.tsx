import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function ContactCTA() {
  const translations = t();

  return (
    <SectionWrapper size="lg" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-accent-100/50 to-primary/5 dark:from-accent-100/10 dark:via-accent-200/5 dark:to-primary/5" />
      
      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-300/10" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
      
      <div className="relative mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {translations.contactCTA.title}
        </h2>

        {/* Text */}
        <p className="mt-6 text-lg text-muted-foreground">
          {translations.contactCTA.text}
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button asChild variant="glow" size="xl">
            <Link href="/contact">
              {translations.contactCTA.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
