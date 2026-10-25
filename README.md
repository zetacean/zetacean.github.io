# gl-web

Portafolio profesional bilingüe de Gustavo López — Astro + TypeScript.

```bash
npm install
npm run dev        # http://localhost:4321
npm run validate   # format + lint + type-check
npm run build      # salida estática en dist/
```

## Despliegue (GitHub Pages)

1. Crea el repositorio **`zetacean.github.io`** en GitHub (sitio de usuario: se sirve en la raíz, sin `base`).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Sube el código a la rama `main`; `.github/workflows/deploy.yml` construye y publica en https://zetacean.github.io. `ci.yml` valida los pull requests.

Define `SITE_URL` (ver `.env.example`) al desplegar para URLs canónicas y sitemap correctos.
Contenido en `src/data/profile/`, detalles de diseño y arquitectura en `CLAUDE.md` y `docs/ARCHITECTURE.md`.
