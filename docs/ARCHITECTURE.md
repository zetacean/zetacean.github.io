# Arquitectura

```
src/
├─ config/        site.ts            contacto y secciones
├─ data/profile/  es.ts · en.ts      contenido del CV (fuente de verdad)
├─ i18n/          ui.ts              textos de interfaz + helpers de idioma
├─ types/         profile.ts         contratos de datos
├─ utils/         routes.ts          rutas localizadas
├─ layouts/       BaseLayout.astro   <head>, SEO, hreflang, canonical
├─ components/
│  ├─ layout/     Header · Footer
│  ├─ sections/   Hero · About · Experience · Skills · Education · Contact
│  └─ ui/         Section · Tag · Button
├─ pages/
│  ├─ [lang]/index.astro   landing
│  ├─ [lang]/cv.astro      CV imprimible (noindex)
│  └─ 404.astro
└─ styles/        tokens.css · global.css
```

## Decisiones

- **Astro estático + i18n por rutas** (`/es/`, `/en/`): SEO por idioma, cero JS de enrutado.
- **Contenido separado de la presentación**: un cambio en el CV no toca componentes.
- **Tokens CSS** como único origen de la paleta; los componentes usan `var(--…)`.
- **Fuentes autoalojadas** (`@fontsource-variable`): sin peticiones a terceros.
- **Menú móvil con Popover API**: sin librerías; un script mínimo lo cierra al navegar.
- **CV imprimible** con estilos `@media print` en vez de generar un PDF binario; así siempre refleja los datos actuales.
- **Secciones con `content-visibility: auto`** para reducir coste de render inicial.

## Cómo añadir…

- **Una experiencia**: agregar un objeto en `experience` de `es.ts` y `en.ts`.
- **Una sección nueva**: componente en `components/sections/`, textos en `ui.ts`, id en `config/site.ts` (`sections`), montarla en `pages/[lang]/index.astro`.
- **Un idioma**: ampliar `Locale` en `types/profile.ts`, añadir entrada en `ui.ts`, `data/profile/`, `astro.config.mjs` y `otherLocale`.
