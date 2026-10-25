import type { Locale } from '@/types/profile';
import { locales } from '@/i18n/ui';

/** Absolute path for a page in a given locale, always with trailing slash. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
