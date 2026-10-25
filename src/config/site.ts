/** Contact points and social links. Empty `github` hides the link everywhere. */
export const contact = {
  email: 'gustavo.lopezm@proton.me',
  linkedin: 'https://www.linkedin.com/in/galopezmu',
  github: 'https://github.com/zetacean',
} as const;

export const site = {
  name: 'Gustavo López',
  nickname: 'Zetacean',
} as const;

/**
 * Feature flags. Flip to `true` once the underlying content exists.
 * - metrics: shows quantified results per job (`Experience.metrics` in src/data/profile/*).
 */
export const features = {
  metrics: false,
} as const;

export const sections = ['about', 'experience', 'skills', 'education', 'contact'] as const;
export type SectionId = (typeof sections)[number];
