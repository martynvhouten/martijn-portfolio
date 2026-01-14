import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  size?: 'sm' | 'default' | 'lg';
  container?: 'sm' | 'default' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'py-12 md:py-16',
  default: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
};

const containerClasses = {
  sm: 'max-w-3xl',
  default: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
  size = 'default',
  container = 'lg',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(sizeClasses[size], className)}
    >
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          containerClasses[container],
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
