import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function TechStack() {
  const translations = t();

  return (
    <SectionWrapper size="default" className="relative overflow-hidden bg-surface-2 dark:bg-surface-1">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.015)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.015)_1px,transparent_1px)] bg-[size:2rem_2rem] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.02)_1px,transparent_1px)]" />
      
      <div className="relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.techStack.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {translations.techStack.subtitle}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {translations.techStack.items.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-5 py-2.5 text-sm font-medium border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow hover:scale-105 dark:bg-card/30 dark:border-border/30"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
