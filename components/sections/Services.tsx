import { Palette, Code, Zap } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

const icons = [Palette, Code, Zap];

export function Services() {
  const translations = t();

  return (
    <SectionWrapper className="bg-muted/30">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.services.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {translations.services.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {translations.services.items.map((service, index) => {
          const Icon = icons[index];
          return (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
