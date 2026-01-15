'use client';

import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type WebsiteGoal = 'Leads' | 'Information' | 'Portfolio' | 'Other';
type PackageInterest = 'Starter' | 'Groei' | 'Premium' | 'Not sure';
type Deadline = 'ASAP' | '1–2 weeks' | '2–4 weeks' | 'Flexible';
type Budget =
  | '€500–€1.000'
  | '€1.000–€1.750'
  | '€1.750–€2.500'
  | '€2.500+';

interface IntakeFormState {
  name: string;
  email: string;
  company: string;
  websiteGoal: WebsiteGoal | '';
  packageInterest: PackageInterest | '';
  deadline: Deadline | '';
  budget: Budget | '';
  message: string;
  consent: boolean;
}

type FieldName = keyof IntakeFormState;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: IntakeFormState = {
  name: '',
  email: '',
  company: '',
  websiteGoal: '',
  packageInterest: '',
  deadline: '',
  budget: '',
  message: '',
  consent: false,
};

const selectClassName =
  'h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';

export function IntakeForm() {
  const [form, setForm] = useState<IntakeFormState>(initialState);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validationErrors = useMemo(() => {
    const errors: Partial<Record<FieldName, string>> = {};

    if (!form.name.trim()) {
      errors.name = 'Naam is verplicht.';
    }

    if (!form.email.trim()) {
      errors.email = 'E-mailadres is verplicht.';
    } else if (!emailRegex.test(form.email.trim())) {
      errors.email = 'Vul een geldig e-mailadres in.';
    }

    if (!form.websiteGoal) {
      errors.websiteGoal = 'Kies het doel van de website.';
    }

    if (!form.packageInterest) {
      errors.packageInterest = 'Kies een pakket.';
    }

    if (!form.message.trim()) {
      errors.message = 'Vertel kort waar je hulp bij nodig hebt.';
    }

    if (!form.consent) {
      errors.consent = 'Je moet akkoord gaan om verder te gaan.';
    }

    return errors;
  }, [form]);

  const isFormValid = Object.keys(validationErrors).length === 0;

  const shouldShowError = (field: FieldName) =>
    submitAttempted || Boolean(touched[field]);

  const handleChange = (field: FieldName, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);

    const subject = `Website aanvraag - ${form.name} - ${form.packageInterest}`;
    const body = [
      `Naam: ${form.name}`,
      `E-mail: ${form.email}`,
      `Bedrijf: ${form.company || '-'}`,
      `Doel website: ${form.websiteGoal}`,
      `Pakket interesse: ${form.packageInterest}`,
      `Deadline: ${form.deadline || '-'}`,
      `Budget indicatie: ${form.budget || '-'}`,
      `Bericht: ${form.message}`,
      `Toestemming: ${form.consent ? 'Ja' : 'Nee'}`,
    ].join('\n');

    const mailtoLink = `mailto:hello@martijnvanhouten.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border/30 bg-card p-8 text-center shadow-sm dark:border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">Bedankt voor je aanvraag</h2>
        <p className="mt-3 text-muted-foreground">
          Ik heb je aanvraag ontvangen. Je krijgt binnen 24 uur reactie met een
          korte terugkoppeling en de volgende stappen.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/">Terug naar home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Naam *</label>
          <Input
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            aria-invalid={Boolean(validationErrors.name)}
            className="mt-2"
            placeholder="Je naam"
          />
          {shouldShowError('name') && validationErrors.name && (
            <p className="mt-2 text-xs text-destructive">{validationErrors.name}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium">E-mail *</label>
          <Input
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            aria-invalid={Boolean(validationErrors.email)}
            className="mt-2"
            placeholder="jouw@email.nl"
          />
          {shouldShowError('email') && validationErrors.email && (
            <p className="mt-2 text-xs text-destructive">{validationErrors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Bedrijf (optioneel)</label>
        <Input
          value={form.company}
          onChange={(event) => handleChange('company', event.target.value)}
          className="mt-2"
          placeholder="Bedrijfsnaam"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Doel van de website *</label>
          <select
            value={form.websiteGoal}
            onChange={(event) => handleChange('websiteGoal', event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, websiteGoal: true }))}
            aria-invalid={Boolean(validationErrors.websiteGoal)}
            className={cn(selectClassName, 'mt-2')}
          >
            <option value="">Maak een keuze</option>
            <option value="Leads">Leads</option>
            <option value="Information">Informatie</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Other">Anders</option>
          </select>
          {shouldShowError('websiteGoal') && validationErrors.websiteGoal && (
            <p className="mt-2 text-xs text-destructive">
              {validationErrors.websiteGoal}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Pakket interesse *</label>
          <select
            value={form.packageInterest}
            onChange={(event) => handleChange('packageInterest', event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, packageInterest: true }))}
            aria-invalid={Boolean(validationErrors.packageInterest)}
            className={cn(selectClassName, 'mt-2')}
          >
            <option value="">Maak een keuze</option>
            <option value="Starter">Starter</option>
            <option value="Groei">Groei</option>
            <option value="Premium">Premium</option>
            <option value="Not sure">Nog niet zeker</option>
          </select>
          {shouldShowError('packageInterest') && validationErrors.packageInterest && (
            <p className="mt-2 text-xs text-destructive">
              {validationErrors.packageInterest}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Deadline (optioneel)</label>
          <select
            value={form.deadline}
            onChange={(event) => handleChange('deadline', event.target.value)}
            className={cn(selectClassName, 'mt-2')}
          >
            <option value="">Geen voorkeur</option>
            <option value="ASAP">Zo snel mogelijk</option>
            <option value="1–2 weeks">1–2 weken</option>
            <option value="2–4 weeks">2–4 weken</option>
            <option value="Flexible">Flexibel</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Budget indicatie (optioneel)</label>
          <select
            value={form.budget}
            onChange={(event) => handleChange('budget', event.target.value)}
            className={cn(selectClassName, 'mt-2')}
          >
            <option value="">Geen voorkeur</option>
            <option value="€500–€1.000">€500–€1.000</option>
            <option value="€1.000–€1.750">€1.000–€1.750</option>
            <option value="€1.750–€2.500">€1.750–€2.500</option>
            <option value="€2.500+">€2.500+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Bericht *</label>
        <Textarea
          value={form.message}
          onChange={(event) => handleChange('message', event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
          aria-invalid={Boolean(validationErrors.message)}
          className="mt-2 min-h-[140px]"
          placeholder="Vertel kort over je project en je wensen."
        />
        {shouldShowError('message') && validationErrors.message && (
          <p className="mt-2 text-xs text-destructive">{validationErrors.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => handleChange('consent', event.target.checked)}
            onBlur={() => setTouched((prev) => ({ ...prev, consent: true }))}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus-visible:ring-ring/50"
          />
          <span>
            Ik ga akkoord dat je contact opneemt over mijn aanvraag. *
          </span>
        </label>
        {shouldShowError('consent') && validationErrors.consent && (
          <p className="mt-2 text-xs text-destructive">{validationErrors.consent}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="glow"
          size="lg"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? 'Versturen...' : 'Website aanvragen'}
        </Button>
        <p className="text-xs text-muted-foreground">
          Binnen 24 uur reactie.
        </p>
      </div>
    </form>
  );
}
