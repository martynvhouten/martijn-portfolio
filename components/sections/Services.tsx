import { Palette, Code, Zap } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

const icons = [Palette, Code, Zap];

export function Services() {
  const translations = t();

  return (
    <SectionWrapper size="lg" className="bg-surface-2 dark:bg-surface-1">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Diensten
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.services.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {translations.services.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {translations.services.items.map((service, index) => {
          const Icon = icons[index];
          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-8 transition-all duration-300 hover:border-accent-300/50 hover:shadow-premium hover:-translate-y-1 dark:border-border/20 dark:hover:border-accent-400/30"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/[0.02] group-hover:to-accent-100/[0.05] dark:group-hover:from-primary/[0.03] dark:group-hover:to-accent-200/[0.03]" />
              
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-muted/30 dark:text-muted/20">
                0{index + 1}
              </span>
              
              {/* Icon */}
              <div className="relative mb-6 inline-flex rounded-xl bg-gradient-to-br from-accent-100 to-accent-200/50 p-4 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/90 group-hover:text-primary-foreground group-hover:shadow-glow dark:from-accent-200/30 dark:to-accent-300/20">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
