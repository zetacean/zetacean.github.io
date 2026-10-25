export type Locale = 'es' | 'en';

export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** One-line context shown under the role. */
  summary?: string;
  /** Achievement-oriented bullets, most relevant first. */
  bullets: readonly string[];
  /** Quantified results (e.g. { value: '-40%', label: 'regression time' }). Shown only if `features.metrics` is on. */
  metrics?: readonly Highlight[];
  tags: readonly string[];
  /** Entries marked as `compact` render with less visual weight (older roles). */
  compact?: boolean;
}

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
}

export interface Profile {
  name: string;
  /** Short role line, e.g. "Senior SDET · Test Automation Engineer". */
  role: string;
  location: string;
  /** Hero statement: what value the person brings, in one or two sentences. */
  tagline: string;
  /** Paragraphs for the "About" section. */
  about: readonly string[];
  highlights: readonly Highlight[];
  experience: readonly Experience[];
  skills: readonly SkillGroup[];
  education: readonly Education[];
  certifications: readonly string[];
  languages: readonly string[];
}
