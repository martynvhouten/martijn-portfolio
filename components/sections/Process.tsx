import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function Process() {
  const translations = t();

  return (
    <SectionWrapper>
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.process.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {translations.process.subtitle}
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid gap-8 md:grid-cols-4">
        {translations.process.steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line (hidden on last item and mobile) */}
            {index < translations.process.steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary/10 md:block" />
            )}

            {/* Step */}
            <div className="relative flex flex-col items-center text-center">
              {/* Number */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-xl font-bold text-primary">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
