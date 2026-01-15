import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { t } from '@/lib/i18n';

export function Hero() {
  const translations = t();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.02)_1px,transparent_1px)]" />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 w-full">
        <div className="mx-auto max-w-3xl text-center">
          {/* Status badge */}
          <div className="animate-fade-in-up mb-8">
            <Badge variant="glass" className="px-4 py-1.5 text-sm font-medium">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Beschikbaar voor nieuwe projecten
            </Badge>
          </div>
          
          {/* Headline */}
          <h1 className="animate-fade-in-up-delay-1 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {translations.hero.headline}
          </h1>
          
          {/* Subtext */}
          <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {translations.hero.subtext}
          </p>
          
          {/* CTAs */}
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="glow" size="xl" className="min-w-[180px]">
              <Link href="/intake">
                {translations.hero.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="min-w-[180px]">
              <Link href="/work">
                {translations.hero.cta.secondary}
              </Link>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="animate-fade-in-up-delay-3 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">5+ jaar</span>
              <span>ervaring</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">30+</span>
              <span>opgeleverde sites</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">&lt;2s</span>
              <span>laadtijd gemiddeld</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  );
}
