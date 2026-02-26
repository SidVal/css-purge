# css-purge

Sandbox para optimizar CSS legacy con PostCSS + PurgeCSS.

- Fuente: `src/`
- Assets opcionales: `public/`
- Salida: `dist/`

## Scripts
- `npm run build`: genera `dist/styles.purged.css`, copia HTML y assets.
- `npm run clean`: limpia `dist/`.
- `npm run dev`: build y mensaje de ayuda.

## Safelist
Edita `postcss.config.js` para evitar que PurgeCSS elimine clases críticas.
