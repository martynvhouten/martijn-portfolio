'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { t } from '@/lib/i18n';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
];

export default function ContactPage() {
  const translations = t();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <SectionWrapper size="default" className="pb-4 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="glass" className="mb-6 px-4 py-1.5">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Open voor nieuwe projecten
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.contact.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.contact.subtitle}
          </p>
        </div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper size="lg" className="pt-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border/30 bg-surface-2 p-12 text-center animate-fade-in dark:bg-surface-1 dark:border-border/20">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/20">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {translations.contact.success.title}
                  </h2>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    {translations.contact.success.text}
                  </p>
                  <Button
                    className="mt-8"
                    variant="outline"
                    size="lg"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Nieuw bericht sturen
                  </Button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="rounded-2xl border border-border/30 bg-surface-2 p-6 sm:p-8 dark:bg-surface-1 dark:border-border/20">
                    {/* Name */}
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        {translations.contact.form.name}
                        <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={translations.contact.form.namePlaceholder}
                        className="h-12 rounded-xl border-border/50 bg-background transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        {translations.contact.form.email}
                        <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={translations.contact.form.emailPlaceholder}
                        className="h-12 rounded-xl border-border/50 bg-background transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                      >
                        {translations.contact.form.message}
                        <span className="text-destructive ml-1">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder={translations.contact.form.messagePlaceholder}
                        className="min-h-[160px] resize-none rounded-xl border-border/50 bg-background transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        Beschrijf kort wat je nodig hebt. Ik neem contact op voor de details.
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="glow"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Versturen...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        {translations.contact.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Email Card */}
                <div className="rounded-2xl border border-border/30 bg-surface-2 p-6 dark:bg-surface-1 dark:border-border/20">
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {translations.contact.info.email}
                  </h3>
                  <a
                    href="mailto:hello@martijnvanhouten.com"
                    className="inline-flex items-center gap-3 font-medium transition-colors hover:text-primary group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                    hello@martijnvanhouten.com
                  </a>
                </div>

                {/* Social Card */}
                <div className="rounded-2xl border border-border/30 bg-surface-2 p-6 dark:bg-surface-1 dark:border-border/20">
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {translations.contact.info.social}
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 dark:bg-background/30"
                        aria-label={social.name}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="rounded-2xl border border-accent-200/50 bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 dark:from-accent-100/10 dark:to-accent-200/5 dark:border-accent-300/20">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-200/50 text-primary dark:bg-accent-300/20">
                      <Clock className="h-4 w-4" />
                    </div>
                                <div>
                                      <h3 className="font-medium">Reactie binnen 24 uur</h3>
                                      <p className="mt-1 text-sm text-muted-foreground">
                                        Op werkdagen reageer ik dezelfde dag. Meestal sneller.
                                      </p>
                                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
