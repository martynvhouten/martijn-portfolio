import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

const translations = t();

export const metadata: Metadata = {
  title: translations.pricing.title,
  description: translations.pricing.subtitle,
  openGraph: {
    title: `${translations.pricing.title} | Martijn van Houten`,
    description: translations.pricing.subtitle,
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-border/30 bg-card transition-all duration-200 hover:border-accent-300/50 dark:border-border/20 dark:hover:border-accent-400/30">
      <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium">
        <span className="pr-4">{question}</span>
        <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

export default function TarievenPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper size="default" className="pb-8 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Investering
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.pricing.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.pricing.subtitle}
          </p>
        </div>
      </SectionWrapper>

      {/* Pricing Cards */}
      <SectionWrapper size="lg" className="pt-4">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {translations.pricing.packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${
                pkg.popular
                  ? 'border-primary/50 shadow-glow dark:border-primary/40'
                  : 'border-border/30 dark:border-border/20 hover:border-accent-300/50 dark:hover:border-accent-400/30'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none bg-primary px-4 py-1.5 text-primary-foreground">
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                    Populair
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="p-6 pb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Pakket {index + 1}
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-y border-border/30 bg-surface-2 px-6 py-4 dark:bg-surface-1 dark:border-border/20">
                <div className="text-2xl font-bold tracking-tight">
                  {pkg.price}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Doorlooptijd: {pkg.timeline}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Button
                  asChild
                  variant={pkg.popular ? 'glow' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  <Link href="/contact">
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Custom / Maatwerk Block */}
      <SectionWrapper size="lg">
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-accent-50 via-accent-100/50 to-primary/5 p-8 sm:p-12 dark:from-accent-100/10 dark:via-accent-200/5 dark:to-primary/5 dark:border-border/20">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-300/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />

          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {translations.pricing.custom.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                {translations.pricing.custom.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild variant="glow" size="xl">
                <Link href="/contact">
                  {translations.pricing.custom.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper size="lg" className="bg-surface-2 dark:bg-surface-1">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {translations.pricing.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {translations.pricing.faq.items.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
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
            {translations.pricing.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.pricing.cta.text}
          </p>
          <div className="mt-8">
            <Button asChild variant="glow" size="xl">
              <Link href="/contact">
                {translations.pricing.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
