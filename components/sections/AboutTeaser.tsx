import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function AboutTeaser() {
  const translations = t();

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.aboutTeaser.title}
        </h2>

        {/* Text */}
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {translations.aboutTeaser.text}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/about">
              {translations.aboutTeaser.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
