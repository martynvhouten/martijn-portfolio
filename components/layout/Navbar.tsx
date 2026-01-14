'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const translations = t();

  const navItems = [
    { name: translations.nav.home, href: '/' },
    { name: translations.nav.work, href: '/work' },
    { name: translations.nav.pricing, href: '/tarieven' },
    { name: translations.nav.intake, href: '/intake' },
    { name: translations.nav.about, href: '/about' },
    { name: translations.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/40 bg-background/85 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight transition-colors hover:text-primary"
        >
          Martijn<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-foreground',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9 rounded-full"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={cn(
              'absolute h-5 w-5 transition-all duration-200',
              mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            )}>
              <Menu className="h-5 w-5" />
            </span>
            <span className={cn(
              'absolute h-5 w-5 transition-all duration-200',
              mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            )}>
              <X className="h-5 w-5" />
            </span>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-out',
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        )}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-accent',
                pathname === item.href
                  ? 'text-primary bg-accent/50'
                  : 'text-foreground'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
              {pathname === item.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
