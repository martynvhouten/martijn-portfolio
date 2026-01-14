'use client';

import { cn } from '@/lib/utils';
import { t } from '@/lib/i18n';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  const translations = t();
  const allTags = [{ value: null, label: translations.work.filterAll }, ...tags.map(tag => ({ value: tag, label: tag }))];

  return (
    <div className="flex justify-center">
      <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-border/40 bg-surface-2 p-1.5 shadow-sm dark:bg-surface-1 dark:border-border/20">
        {allTags.map((tag) => {
          const isSelected = selectedTag === tag.value;
          return (
            <button
              key={tag.label}
              onClick={() => onTagSelect(tag.value)}
              className={cn(
                'relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/80 dark:hover:bg-background/50'
              )}
            >
              {tag.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
