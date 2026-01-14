import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', className)}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
