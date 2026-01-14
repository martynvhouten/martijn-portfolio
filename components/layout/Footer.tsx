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
    href: 'mailto:hello@example.com',
    icon: Mail,
  },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Werk', href: '/work' },
  { name: 'Over mij', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const translations = t();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Martijn<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {translations.footer.madeWith}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
