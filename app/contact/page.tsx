'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionWrapper } from '@/components/SectionWrapper';
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
      <SectionWrapper className="pb-8 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {translations.contact.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.contact.subtitle}
          </p>
        </div>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper className="pt-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card p-12 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {translations.contact.success.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {translations.contact.success.text}
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Nog een bericht sturen
                  </Button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      {translations.contact.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={translations.contact.form.namePlaceholder}
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      {translations.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={translations.contact.form.emailPlaceholder}
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      {translations.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={translations.contact.form.messagePlaceholder}
                      className="min-h-[160px] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Versturen...' : translations.contact.form.submit}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* Email */}
                <div>
                  <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                    {translations.contact.info.email}
                  </h3>
                  <a
                    href="mailto:hello@martijnvanhouten.com"
                    className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5" />
                    hello@martijnvanhouten.com
                  </a>
                </div>

                {/* Social */}
                <div>
                  <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                    {translations.contact.info.social}
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="rounded-xl border border-border/50 bg-muted/30 p-6">
                  <p className="text-sm text-muted-foreground">
                    Ik reageer normaal gesproken binnen 24 uur op werkdagen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
