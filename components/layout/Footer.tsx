import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
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
  {
    name: 'Email',
    href: 'mailto:hello@martijnvanhouten.com',
    icon: Mail,
  },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Werk', href: '/work' },
  { name: 'Tarieven', href: '/tarieven' },
  { name: 'Over mij', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const translations = t();

  return (
    <footer className="relative border-t border-border/30 bg-surface-2 dark:bg-surface-1">
      {/* Gradient border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/50 to-transparent dark:via-accent-400/30" />
      
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Martijn<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs text-center md:text-left">
              {translations.footer.madeWith}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-3 md:items-center">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mb-1">
              Navigatie
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground link-underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 mb-3">
              Connect
            </span>
            <div className="flex items-center gap-3">
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
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border/30 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground/80">
            {translations.footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground/60">
            Ontworpen & gebouwd met precisie
          </p>
        </div>
      </div>
    </footer>
  );
}
