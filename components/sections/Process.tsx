import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function Process() {
  const translations = t();

  return (
    <SectionWrapper size="lg">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          Proces
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.process.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {translations.process.subtitle}
        </p>
      </div>

      {/* Process Steps - Desktop */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-4">
        {translations.process.steps.map((step, index) => (
          <div key={step.number} className="relative group">
            {/* Connector line */}
            {index < translations.process.steps.length - 1 && (
              <div className="absolute left-[calc(50%+2rem)] right-0 top-8 h-px">
                <div className="h-full w-full bg-gradient-to-r from-accent-300 via-accent-200 to-accent-100/50 dark:from-accent-400/50 dark:via-accent-300/30 dark:to-accent-200/10" />
                <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-accent-200 dark:border-accent-300/50" />
              </div>
            )}

            {/* Step */}
            <div className="relative flex flex-col items-center text-center px-2">
              {/* Number circle */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200/50 text-xl font-bold text-primary shadow-sm transition-all duration-300 group-hover:shadow-glow group-hover:scale-105 dark:from-accent-200/30 dark:to-accent-300/20">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Steps - Mobile Timeline */}
      <div className="md:hidden space-y-0">
        {translations.process.steps.map((step, index) => (
          <div key={step.number} className="relative flex gap-6">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-100 to-accent-200/50 text-lg font-bold text-primary dark:from-accent-200/30 dark:to-accent-300/20">
                {step.number}
              </div>
              {index < translations.process.steps.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-accent-200 to-accent-100/30 my-2 dark:from-accent-300/30 dark:to-accent-200/10" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
