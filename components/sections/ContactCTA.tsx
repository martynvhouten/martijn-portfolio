import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function ContactCTA() {
  const translations = t();

  return (
    <SectionWrapper className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent-100/20 dark:from-primary/10 dark:via-primary/5 dark:to-accent-200/10">
      <div className="mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.contactCTA.title}
        </h2>

        {/* Text */}
        <p className="mt-4 text-lg text-muted-foreground">
          {translations.contactCTA.text}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button asChild size="lg">
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
