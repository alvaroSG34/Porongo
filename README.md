# Landing de Campaña - Porongo

Implementación de landing page en Next.js + TypeScript con arquitectura por features, contenido desacoplado y foco en legibilidad/responsive.

## Stack

- Next.js (App Router)
- TypeScript estricto
- Tailwind CSS + design tokens CSS
- Zod para validación de contenido
- Vitest + Testing Library
- Playwright E2E
- ESLint + Prettier + Husky + Commitlint

## Scripts

- `npm run dev`: desarrollo local
- `npm run build`: build de producción
- `npm run lint`: lint
- `npm run typecheck`: chequeo de tipos
- `npm run test`: pruebas unitarias
- `npm run test:e2e`: pruebas E2E
- `npm run check`: lint + types + test

## Estructura

- `app/`: entrypoints App Router
- `src/features/*`: secciones por dominio UI
- `src/shared/*`: primitivos reutilizables
- `src/content/*`: contenido y schema tipado
- `tests/`: unit y e2e

## Convenciones de mantenimiento

- No hardcodear textos en componentes de feature.
- Editar contenido en `src/content/landing.json`.
- Mantener tamaño mínimo legible: base 16px.
- Cualquier cambio visual debe validarse en 390/768/1024/1440.
