# gl-web — Portafolio profesional de Gustavo López

Landing bilingüe (es/en) en Astro 7 + TypeScript estricto, 100% estática, sin frameworks de UI y casi sin JS.
Objetivo: mostrar la experiencia de un SDET Senior a reclutadores y líderes técnicos. Tono sobrio y elegante.

## Comandos

- `npm run dev` — servidor de desarrollo (http://localhost:4321)
- `npm run validate` — format:check + eslint + astro check. **Ejecutar antes de dar una tarea por terminada.**
- `npm run build` — `astro check` + build a `dist/`
- `npm run format` / `npm run lint:fix` — autocorrección

## Arquitectura (resumen; detalle en docs/ARCHITECTURE.md)

- `src/data/profile/{es,en}.ts` — **todo el contenido del CV**. Tipado con `src/types/profile.ts`. Editar contenido aquí, nunca en componentes.
- `src/i18n/ui.ts` — textos de interfaz por idioma. Cualquier string visible nuevo va aquí en ambos idiomas.
- `src/config/site.ts` — email, LinkedIn, GitHub (vacío = oculto), secciones del menú.
- `src/styles/tokens.css` — única fuente de colores, tipografías y espaciados. Paleta: azul noche, azul marino, violeta, magenta y rosa (`--palette-*`).
- `src/components/{layout,sections,ui}` — Header/Footer, secciones de la página, primitivas reutilizables.
- `src/pages/[lang]/{index,cv}.astro` — rutas `/es/`, `/en/`, `/es/cv/`, `/en/cv/` (CV imprimible → "Guardar como PDF"). `/` redirige a `/es/`.

## Reglas

1. **Consultar al usuario ante cualquier duda de diseño** antes de implementarla (requisito explícito del proyecto).
2. Sin hex sueltos en componentes: usar variables de `tokens.css`. Tema oscuro únicamente (decisión del usuario).
3. Todo cambio de contenido o UI debe existir en `es` y `en`.
4. No inventar datos del CV (cifras, métricas, empresas). Si falta información, preguntar. La fuente de verdad es `src/data/profile/*`; ante datos nuevos, preguntar al usuario.
5. Rendimiento: CSS con scope por componente, sin librerías de UI/animación, JS solo si es imprescindible (hoy: cierre del menú móvil y botón de imprimir). Imágenes con `astro:assets`.
6. Accesibilidad: HTML semántico, contraste AA, foco visible, respetar `prefers-reduced-motion`.
7. TypeScript estricto (`astro/tsconfigs/strictest`); imports con alias `@/` y `import type` para tipos.
8. Commits pequeños; el hook de husky ejecuta lint-staged.

## Identidad

Marca del header: nickname **Zetacean** (`site.nickname`), igual que en GitHub (github.com/zetacean). Foto: `src/assets/profile.png` (avatar ilustrado de GitHub), usada en el hero.

## Pendientes conocidos

- Métricas por rol: feature flag `features.metrics` (`src/config/site.ts`, apagado). Cuando el usuario tenga cifras reales, añadir `metrics` a cada experiencia en `src/data/profile/*` y activarlo.
- Despliegue: GitHub Pages (sitio de usuario) en https://zetacean.github.io, sin `base`, vía `.github/workflows/deploy.yml` al hacer push a `main`. Si el usuario compra un dominio propio, cambiar `SITE_URL`/`site` en `astro.config.mjs`, `public/robots.txt` y añadir `public/CNAME`.
- Imagen Open Graph y, opcionalmente, PDF estático del CV.
- Verificación visual en navegador (Lighthouse, móvil) aún no realizada.
