import type { Locale, Profile } from '@/types/profile';
import { profileEs } from './es';
import { profileEn } from './en';

const profiles: Record<Locale, Profile> = { es: profileEs, en: profileEn };

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}
