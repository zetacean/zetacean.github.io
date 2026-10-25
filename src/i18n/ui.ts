import type { Locale } from '@/types/profile';

export const locales: readonly Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    htmlLang: 'es-CO',
    metaTitle: 'Gustavo López — SDET Senior | Automatización de pruebas',
    metaDescription:
      'Ingeniero SDET con 7 años de experiencia diseñando estrategias de calidad end-to-end, frameworks de automatización y pipelines CI/CD para web, APIs y móvil.',
    skipToContent: 'Saltar al contenido',
    nav: {
      about: 'Perfil',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación',
      contact: 'Contacto',
    },
    menu: 'Menú',
    switchLanguage: 'Cambiar idioma',
    hero: {
      cta: 'Contáctame',
      secondary: 'Ver experiencia',
      eyebrow: 'Hola, soy',
      photoAlt: 'Retrato ilustrado de Gustavo López',
    },
    sections: {
      about: 'Perfil',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación y certificaciones',
      contact: 'Hablemos',
    },
    education: { degrees: 'Formación', certifications: 'Certificaciones' },
    contact: {
      lead: '¿Buscas a alguien que lleve la calidad al centro del desarrollo? Escríbeme.',
      email: 'Enviar correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Ver CV imprimible',
    },
    cv: {
      title: 'Currículum',
      print: 'Guardar como PDF',
      back: 'Volver a la web',
      profile: 'Perfil',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación',
      certifications: 'Certificaciones',
      languages: 'Idiomas',
    },
    footer: 'Hecho con Astro.',
    notFound: { title: 'Página no encontrada', back: 'Volver al inicio' },
  },
  en: {
    htmlLang: 'en-US',
    metaTitle: 'Gustavo López — Senior SDET | Test Automation',
    metaDescription:
      'SDET with 7 years of experience designing end-to-end quality strategies, automation frameworks and CI/CD pipelines for web, API and mobile.',
    skipToContent: 'Skip to content',
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    menu: 'Menu',
    switchLanguage: 'Switch language',
    hero: {
      cta: 'Get in touch',
      secondary: 'View experience',
      eyebrow: "Hi, I'm",
      photoAlt: 'Illustrated portrait of Gustavo López',
    },
    sections: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education & certifications',
      contact: "Let's talk",
    },
    education: { degrees: 'Education', certifications: 'Certifications' },
    contact: {
      lead: 'Looking for someone who puts quality at the heart of development? Drop me a line.',
      email: 'Send email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'View printable CV',
    },
    cv: {
      title: 'Résumé',
      print: 'Save as PDF',
      back: 'Back to site',
      profile: 'Profile',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
    },
    footer: 'Built with Astro.',
    notFound: { title: 'Page not found', back: 'Back to home' },
  },
} as const satisfies Record<Locale, unknown>;

export type UiStrings = (typeof ui)[Locale];

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function useTranslations(locale: Locale): UiStrings {
  return ui[locale];
}
