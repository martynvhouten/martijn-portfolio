import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/SectionWrapper';
import { t } from '@/lib/i18n';

export function TechStack() {
  const translations = t();

  return (
    <SectionWrapper className="bg-muted/30">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {translations.techStack.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {translations.techStack.subtitle}
        </p>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {translations.techStack.items.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </SectionWrapper>
  );
}
