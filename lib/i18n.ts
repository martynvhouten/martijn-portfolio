import nl from '@/content/i18n/nl.json';
import en from '@/content/i18n/en.json';

export type Locale = 'nl' | 'en';

const translations = {
  nl,
  en,
} as const;

// Default locale
export const defaultLocale: Locale = 'nl';

// Get translations for a specific locale
export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

// Shorthand for getting Dutch translations (current default)
export function t() {
  return getTranslations('nl');
}

// Type helper for translation keys
export type Translations = typeof nl;
