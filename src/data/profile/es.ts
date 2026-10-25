import type { Profile } from '@/types/profile';

export const profileEs: Profile = {
  name: 'Gustavo López',
  role: 'SDET Senior · Test Automation Engineer',
  location: 'Bogotá, Colombia',
  tagline:
    'Integro la calidad en el ciclo de desarrollo: plataformas de testing, frameworks de automatización y pipelines CI/CD que reducen el riesgo en producción y aceleran los releases.',
  about: [
    'Ingeniero de Software en Pruebas (SDET) con 7 años de experiencia diseñando estrategias de calidad end-to-end y plataformas de testing escalables para aplicaciones web, APIs y móviles.',
    'He liderado el diseño e implementación de frameworks de testing, herramientas internas y soluciones de automatización orientadas a reducir el riesgo productivo y mejorar la confiabilidad del software, incluyendo pruebas de performance y proyectos de RPA/Web Scraping.',
    'Al haber colaborado en el desarrollo backend y frontend, abordo la calidad desde una perspectiva técnica integral. Además, aporto mediante mentorías, definición de buenas prácticas y acompañamiento a los equipos para elevar su madurez de calidad, más allá de la ejecución de pruebas.',
  ],
  highlights: [
    { value: '7+', label: 'años en automatización y calidad de software' },
    { value: '8', label: 'organizaciones donde he impulsado la calidad' },
    { value: '3', label: 'plataformas cubiertas: web, API y móvil, además de performance' },
    { value: '3', label: 'lenguajes de uso diario: Python, C# y Java' },
  ],
  experience: [
    {
      company: 'Apiux Tech',
      role: 'QA Automation Engineer Senior | SDET',
      period: 'Mar 2025 — Actualidad',
      summary:
        'Lidero la automatización de pruebas de UI y backend y la incorporación de IA al diseño de pruebas.',
      bullets: [
        'Desarrollé desde cero el framework de automatización de pruebas de backend.',
        'Definí una nueva estructura para los casos de prueba automatizados de UI.',
        'Creé skills y un agente de IA para el diseño de casos de prueba en VS Code con GitHub Copilot.',
        'Automaticé pruebas funcionales con Robot Framework.',
        'Realicé pruebas manuales y funcionales, y di seguimiento y gestión de bugs en UAT.',
      ],
      tags: ['Robot Framework', 'Python', 'GitHub Copilot', 'API Testing'],
    },
    {
      company: 'Indra',
      role: 'QA Automation — Senior Consultant',
      period: 'Dic 2024 — Feb 2025',
      summary: 'Formación técnica de equipos en pruebas de servicios y herramientas de testing.',
      bullets: [
        'Capacité al equipo en pruebas de backend: métodos HTTP, REST API y códigos de estado.',
        'Impartí formación en automatización de pruebas de backend con Postman.',
        'Capacité en herramientas de testing de Jira.',
      ],
      tags: ['Postman', 'REST', 'Jira'],
    },
    {
      company: 'Simetrik',
      role: 'QA Engineer',
      period: 'Jun 2024 — Nov 2024',
      summary: 'Automatización de pruebas de UI y backend.',
      bullets: [
        'Diseñé e implementé un framework de pruebas web con Playwright y Pytest.',
        'Automaticé pruebas de UI con Behave, Selenium y Pytest, y de backend con Requests y Pytest.',
        'Diseñé casos de prueba funcionales en TestRail.',
        'Mantuve el framework de pruebas de backend y capacité al equipo en buenas prácticas de desarrollo.',
      ],
      tags: ['Playwright', 'Pytest', 'Selenium', 'Behave', 'TestRail'],
    },
    {
      company: 'Imagemaker',
      role: 'QA Automation Engineer Senior',
      period: 'Dic 2022 — Jun 2024',
      summary: 'Automatización, herramientas internas y mejora del proceso de calidad.',
      bullets: [
        'Diseñé, construí y ejecuté pruebas automatizadas con Robot Framework y pruebas de servicios con Postman.',
        'Integré Jira y Azure DevOps con Robot Framework y Python.',
        'Desarrollé herramientas para optimizar los procesos de calidad e impulsé la mejora continua del área de QA.',
        'Apoyé la implementación de CI/CD en las distintas células de trabajo.',
        'Contribuí al desarrollo de una aplicación interna de RPA / Web Scraping.',
        'Automaticé pruebas web con Cucumber, Java y JUnit, y apoyé pruebas de accesibilidad en Android e iOS.',
        'Mentoricé técnicamente al equipo de testing, promoví buenas prácticas de desarrollo y participé en entrevistas técnicas de selección.',
      ],
      tags: ['Robot Framework', 'Postman', 'Java', 'Cucumber', 'Azure DevOps', 'RPA'],
    },
    {
      company: 'Hexacta',
      role: 'Automation Tester Semi Senior | SDET',
      period: 'Abr 2022 — Dic 2022',
      location: 'Bogotá, Colombia',
      summary: 'Perfil full-stack con foco en performance y calidad de servicios.',
      bullets: [
        'Creé pruebas de carga con Locust y Python.',
        'Automaticé pruebas de servicios con Postman.',
        'Desarrollé APIs (ASP.NET Core) y el frontend (Angular) del proyecto.',
        'Construí flujos de transformación de datos con Azure Data Factory.',
      ],
      tags: ['Locust', 'Python', 'ASP.NET Core', 'Angular', 'Azure Data Factory'],
    },
    {
      company: 'NTT Data Europe & Latam',
      role: 'Consultant — Automation Tester',
      period: 'Mar 2021 — Mar 2022',
      bullets: [
        'Diseñé y ejecuté pruebas automatizadas con Robot Framework; pruebas móviles con Appium y web con Selenium.',
        'Desarrollé herramientas de apoyo a la automatización en Java, C# y Python.',
        'Migré y mantuve los robots existentes y mejoré las herramientas de automatización.',
        'Mantuve los pipelines CI/CD del área de pruebas en Azure Pipelines.',
        'Brindé soporte técnico y capacitación sobre las herramientas desarrolladas.',
      ],
      tags: ['Robot Framework', 'Appium', 'Selenium', 'Azure Pipelines'],
      compact: true,
    },
    {
      company: 'Complemento 360',
      role: 'Automatizador de pruebas',
      period: 'Oct 2020 — Feb 2021',
      bullets: [
        'Diseñé y ejecuté casos de prueba automatizados con Robot Framework, Appium (móvil) y Selenium (web).',
        'Desarrollé herramientas de apoyo a la automatización en Java, C# y Python.',
      ],
      tags: ['Robot Framework', 'Appium', 'Selenium'],
      compact: true,
    },
    {
      company: 'Primestone',
      role: 'Analista de pruebas y automatizador',
      period: 'Jul 2019 — Oct 2020',
      summary: 'Inicio de carrera: de prácticas a automatizador.',
      bullets: [
        'Planeé, diseñé y ejecuté pruebas funcionales, incluidas pruebas en ambiente AWS.',
        'Mantuve un framework en C# con SpecFlow y diseñé uno nuevo en Python con Cucumber.',
      ],
      tags: ['C#', 'SpecFlow', 'Python', 'Cucumber', 'AWS'],
      compact: true,
    },
  ],
  skills: [
    {
      title: 'Automatización de pruebas',
      items: [
        'Playwright',
        'Robot Framework',
        'Pytest',
        'Selenium',
        'Appium',
        'Behave',
        'Cucumber',
        'SpecFlow',
        'JUnit',
      ],
    },
    { title: 'Lenguajes', items: ['Python', 'C#', 'Java'] },
    {
      title: 'APIs y performance',
      items: ['Postman', 'Requests', 'REST', 'Locust'],
    },
    {
      title: 'CI/CD y nube',
      items: ['Jenkins', 'Azure DevOps', 'Azure Pipelines', 'AWS', 'Azure Data Factory'],
    },
    {
      title: 'Desarrollo',
      items: ['ASP.NET Core', 'Angular', 'RPA / Web Scraping'],
    },
    {
      title: 'IA y gestión de calidad',
      items: ['MCP', 'GitHub Copilot', 'Jira', 'TestRail', 'Scrum'],
    },
  ],
  education: [
    {
      institution: 'Fundación Universitaria Internacional de La Rioja (UNIR)',
      program: 'Ingeniería Informática',
      period: '2024 — 2026',
    },
    {
      institution: 'SENA',
      program: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      period: '2021 — 2023',
    },
    {
      institution: 'SENA',
      program: 'Técnico en Programación de Software',
      period: '2019 — 2020',
    },
  ],
  certifications: [
    'Scrum Fundamentals Certified (SFC)',
    'Azure DevOps: Introduction to CI/CD with Visual Studio',
    'Using Python to Access Web Data',
    'Python for Data Science',
    'Curso de Full Stack C# .NET',
  ],
  languages: ['Español (nativo)'],
};
