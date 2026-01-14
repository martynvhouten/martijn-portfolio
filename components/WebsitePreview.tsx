'use client';

import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WebsitePreviewProps {
  url: string;
  title: string;
  className?: string;
}

export function WebsitePreview({ url, title, className }: WebsitePreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load iframe when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extract domain for display
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div ref={containerRef} className={cn('w-full', className)}>
      {/* Browser Frame */}
      <div className="overflow-hidden rounded-2xl border border-border/40 bg-card shadow-premium dark:border-border/30">
        {/* Browser Chrome / Title Bar */}
        <div className="flex items-center justify-between border-b border-border/30 bg-surface-2 px-4 py-3 dark:bg-surface-1 dark:border-border/20">
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80 dark:bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-400/80 dark:bg-green-500/60" />
            </div>
          </div>

          {/* Address Bar */}
          <div className="mx-4 flex flex-1 items-center justify-center">
            <div className="flex max-w-md flex-1 items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5 text-sm dark:bg-background/50">
              <span className="text-green-600 dark:text-green-400">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="truncate text-muted-foreground">{displayUrl}</span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="hidden items-center gap-1 sm:flex">
            <button
              onClick={() => setIsMobileView(false)}
              className={cn(
                'rounded-lg p-1.5 transition-colors',
                !isMobileView
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title="Desktop weergave"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsMobileView(true)}
              className={cn(
                'rounded-lg p-1.5 transition-colors',
                isMobileView
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title="Mobiele weergave"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Preview Container */}
        <div className="relative bg-muted/30">
          {/* Iframe Container */}
          <div
            className={cn(
              'relative mx-auto overflow-hidden transition-all duration-300',
              isMobileView ? 'max-w-[375px]' : 'w-full'
            )}
          >
            <div className="relative h-[400px] overflow-y-auto overflow-x-hidden sm:h-[450px]">
              {isVisible ? (
                <>
                  {/* Loading State */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-2 dark:bg-surface-1">
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                        <span className="text-sm text-muted-foreground">Website laden...</span>
                      </div>
                    </div>
                  )}

                  {/* Iframe */}
                  <iframe
                    src={url}
                    title={`Preview van ${title}`}
                    className={cn(
                      'h-[200%] w-full origin-top-left scale-50 border-0 transition-opacity duration-300',
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{
                      width: '200%',
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left',
                    }}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </>
              ) : (
                /* Placeholder before visibility */
                <div className="flex h-full items-center justify-center bg-surface-2 dark:bg-surface-1">
                  <span className="text-6xl font-bold text-accent-400/20 dark:text-accent-400/15">
                    {title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Gradient overlays to hint scrollability */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-4 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Bezoek website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Mobile Fallback Note */}
      <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
        Tip: Open de website in een nieuw tabblad voor de volledige ervaring.
      </p>
    </div>
  );
}
