'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { t } from '@/lib/i18n';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  const translations = t();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* All button */}
      <button
        onClick={() => onTagSelect(null)}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Badge
          variant={selectedTag === null ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer px-4 py-2 text-sm font-medium transition-all',
            selectedTag === null
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-primary/10'
          )}
        >
          {translations.work.filterAll}
        </Badge>
      </button>

      {/* Tag buttons */}
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Badge
            variant={selectedTag === tag ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer px-4 py-2 text-sm font-medium transition-all',
              selectedTag === tag
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-primary/10'
            )}
          >
            {tag}
          </Badge>
        </button>
      ))}
    </div>
  );
}
