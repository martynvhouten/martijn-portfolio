'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  /**
   * Logo variant to display:
   * - 'full': Mark + wordmark combined (for hero/footer)
   * - 'wordmark': Text only
   * - 'mark': Monogram only (for mobile/favicon)
   */
  variant?: 'full' | 'wordmark' | 'mark';
  className?: string;
}

/**
 * Logo component with automatic theme adaptation.
 * Uses inline SVG with system fonts for consistent typography.
 */
export function Logo({ variant = 'full', className }: LogoProps) {
  if (variant === 'mark') {
    return <LogoMark className={className} />;
  }

  if (variant === 'wordmark') {
    return <LogoWordmark className={className} />;
  }

  return <LogoFull className={className} />;
}

/** Geometric MH monogram */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={cn('h-8 w-8', className)}
      aria-label="Martijn van Houten logo"
    >
      <g
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* M left vertical */}
        <path d="M4 26V6" stroke="currentColor" />
        {/* M left diagonal */}
        <path d="M4 6L12 16" stroke="currentColor" />
        {/* M right diagonal (accent) */}
        <path d="M12 16L20 6" className="stroke-primary" />
        {/* Shared stem */}
        <path d="M20 6V26" stroke="currentColor" />
        {/* H horizontal */}
        <path d="M20 16H28" stroke="currentColor" />
        {/* H right vertical */}
        <path d="M28 6V26" stroke="currentColor" />
      </g>
    </svg>
  );
}

/** Wordmark: Martijn van Houten */
function LogoWordmark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 28"
      fill="none"
      className={cn('h-6', className)}
      aria-label="Martijn van Houten"
    >
      <text
        x="0"
        y="20"
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        Martijn van Houten
      </text>
      <circle cx="192" cy="18" r="2.5" className="fill-primary" />
    </svg>
  );
}

/** Combined: Mark + Wordmark */
function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <LogoWordmark className="h-5 hidden sm:block" />
    </div>
  );
}

export { LogoMark, LogoWordmark, LogoFull };
