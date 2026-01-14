import { Metadata } from 'next';
import { SectionWrapper } from '@/components/SectionWrapper';
import { IntakeForm } from '@/components/IntakeForm';

export const metadata: Metadata = {
  title: 'Website aanvragen',
  description:
    'Vraag een website aan en ontvang binnen 24 uur reactie. Korte intake voor een helder voorstel.',
  openGraph: {
    title: 'Website aanvragen | Martijn van Houten',
    description:
      'Vraag een website aan en ontvang binnen 24 uur reactie. Korte intake voor een helder voorstel.',
  },
};

export default function IntakePage() {
  return (
    <>
      <SectionWrapper size="default" className="pb-8 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Intake
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Website aanvragen
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Voor ondernemers en bedrijven die een professionele website willen
            met duidelijke doelen. Binnen 24 uur reactie.
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
