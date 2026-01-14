import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function AboutTeaser() {
  const translations = t();

  return (
    <SectionWrapper size="lg">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Image placeholder */}
        <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:order-2">
          <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300/50 dark:from-accent-200/30 dark:via-accent-300/20 dark:to-accent-400/10" />
          <div className="absolute inset-0 rounded-3xl border border-border/30 bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-100/20 dark:to-accent-200/10 flex items-center justify-center">
            <span className="text-7xl font-bold text-accent-400/30 dark:text-accent-400/20">M</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center lg:text-left lg:order-1">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Over mij
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.aboutTeaser.title}
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {translations.aboutTeaser.text}
          </p>

          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                {translations.aboutTeaser.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
