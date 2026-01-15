import { Metadata } from 'next';
import { SectionWrapper } from '@/components/SectionWrapper';
import { IntakeForm } from '@/components/IntakeForm';

export const metadata: Metadata = {
  title: 'Project aanvragen',
  description:
    'Start je project. Vul het formulier in en ontvang binnen 24 uur een reactie met volgende stappen.',
  openGraph: {
    title: 'Project aanvragen | Martijn van Houten',
    description:
      'Start je project. Vul het formulier in en ontvang binnen 24 uur een reactie met volgende stappen.',
  },
};

export default function IntakePage() {
  return (
    <>
      <SectionWrapper size="default" className="pb-8 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Start hier
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Project aanvragen
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vul het formulier in en ik neem binnen 24 uur contact met je op. Geen verplichtingen, wel een helder voorstel.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper size="lg" className="pt-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/30 bg-card p-6 shadow-sm sm:p-10 dark:border-border/20">
          <IntakeForm />
        </div>
      </SectionWrapper>
    </>
  );
}
