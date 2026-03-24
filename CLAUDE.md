# TFT Builder — CLAUDE.md

## Stack
- **Next.js 14** con App Router
- **TypeScript**
- **SCSS Modules** — sin Tailwind, sin CSS-in-JS
- **next/image** con `unoptimized` para imágenes locales

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # layout raíz con globals.scss
│   ├── page.tsx            # ruta / → guía de build Yordle
│   ├── page.module.scss
│   ├── globals.scss        # variables CSS + reset global
│   └── tabla/
│       ├── page.tsx        # ruta /tabla → tabla de items por campeón
│       └── page.module.scss
├── components/
│   ├── AugmentsSection/    # grid de augments (prismatic/gold/silver)
│   ├── CarryItemsSection/  # items por carry con portrait
│   ├── ChampionTable/      # tabla completa de campeones (usada en /tabla)
│   ├── ChampionsSection/   # grid de campeones con badges carry/unlock
│   ├── Footer/             # links a Community Dragon / Data Dragon
│   ├── Header/             # badge, h1 gradiente, meta chips, botón → /tabla
│   ├── ItemGallery/        # galería de items en chips grandes
│   ├── ItemLegend/         # galería de items en chips pequeños (usada en /tabla)
│   ├── SectionWrap/        # wrapper reutilizable: panel + título dorado
│   ├── TipsSection/        # grid de tips de juego
│   └── TraitsSection/      # traits activos con dots de color
└── data/
    ├── build.ts            # datos de la guía: traits, champions, carries, items, augments, tips
    └── tabla.ts            # datos de la tabla: tableRows, legendItems
```

## Convenciones

- Cada componente vive en `src/components/NombreComponente/` con su `index.tsx` y `NombreComponente.module.scss`
- Los datos están centralizados en `src/data/` — nunca hardcodear datos en los componentes
- Las rutas de imágenes usan `/tft-assets/...` (relativas a `public/`)
- Los selectores globales de elementos (`thead`, `tbody`, `td`) deben ir **anidados** dentro de una clase en los CSS modules, nunca sueltos

## Assets

```
public/tft-assets/
├── champions/          # portraits usados en la build actual (9 PNG manuales)
├── items/              # items usados en la build actual (20 PNG manuales)
└── items-ddragon/      # descarga completa DDragon 16.6.1 (~558 PNG)
```

Los assets de DDragon siguen el patrón:
- Items: `TFT_Item_{NombreItem}.png`, `TFT16_Item_{Trait}_{NombreItem}.png`
- La descarga completa se obtuvo de `https://ddragon.leagueoflegends.com/cdn/16.6.1/data/en_US/tft-item.json`

## Variables CSS (globals.scss)

| Variable         | Valor     | Uso                        |
|------------------|-----------|----------------------------|
| `--gold`         | `#c89b3c` | bordes carry, títulos      |
| `--gold-light`   | `#f0e6a2` | texto sobre fondo oscuro   |
| `--dark`         | `#080d18` | fondo body                 |
| `--panel`        | `#0f1929` | fondo de secciones         |
| `--card`         | `#162031` | fondo de cards             |
| `--border`       | `#243047` | bordes por defecto         |
| `--yordle`       | `#9b59b6` | color del trait Yordle     |
| `--yordle-light` | `#d7a8f0` | texto Yordle claro         |
| `--text`         | `#c8d6e8` | texto principal            |
| `--muted`        | `#637a96` | texto secundario           |

## Comandos

```bash
npm run dev    # desarrollo en localhost:3000
npm run build  # build de producción
npm run lint   # linter
```

## Rutas

| Ruta     | Descripción                              |
|----------|------------------------------------------|
| `/`      | Guía de build Yordle 8 Reroll completa   |
| `/tabla` | Tabla de items recomendados por campeón  |
