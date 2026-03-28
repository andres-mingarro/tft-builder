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
│   ├── ChampionTable/      # tabla de campeones con drag-and-drop, item picker, items alternativos
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
    ├── tabla.ts            # datos de la tabla: tableRows (con altItems), legendItems
    └── recipes.ts          # recetas de items: componentes por item + itemStats para tooltips
```

## Convenciones

- Cada componente vive en `src/components/NombreComponente/` con su `index.tsx` y `NombreComponente.module.scss`
- Los datos están centralizados en `src/data/` — nunca hardcodear datos en los componentes
- Las rutas de imágenes usan `/tft-assets/...` (relativas a `public/`)
- Los selectores globales de elementos (`thead`, `tbody`, `td`) deben ir **anidados** dentro de una clase en los CSS modules, nunca sueltos

## Modelo de datos — `/tabla`

### `TableRow` (tabla.ts)
| Campo           | Tipo            | Descripción                                      |
|-----------------|-----------------|--------------------------------------------------|
| `id`            | `number`        | PK (coincide con DB)                             |
| `items`         | `TableItem[]`   | Items principales (3); cada uno con `dbId` de DB |
| `altItems`      | `Item[]`        | Items alternativos (3); solo lectura, sin DB     |
| `priority`      | `1–5`           | Estrellas de prioridad                           |
| `portraitVariant` | `carry\|unlock\|default` | Estilo del borde del portrait       |

- `TableItem` extiende `Item` con `dbId` (FK a `build_champion_items`) para persistir cambios vía item picker
- `altItems` es opcional y solo se renderiza; no tiene persistencia en DB

### ChampionTable (componente)
- Drag-and-drop de filas con `@dnd-kit/core` → persiste orden en DB vía `updateChampionPositions`
- Click en item principal → abre `ItemPicker` → persiste cambio en DB vía `updateChampionItem`
- Columnas: Campeón · Rol · Traits · Items Recomendados · Items Alternativos

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

## Fuentes de datos de builds

Los datos de items y composiciones se verifican contra el meta real del parche actual. Fuentes usadas:

| Fuente | URL | Uso |
|--------|-----|-----|
| tactics.tools | `https://tactics.tools/units/{champion}` | Estadísticas por campeón: win rate, items más jugados con % play rate y avg placement |
| u.gg | `https://u.gg/tft/comps/yordle-reroll` | Comp completa con items por rol |
| TFT Academy | `https://tftacademy.com/tierlist/comps/set-16-8-yordles` | Guía narrativa detallada por campeón |
| Mobalytics | `https://mobalytics.gg/tft/comps-guide/yordle-reroll-...` | Items alternativos y estrategia |

**Parche verificado:** 16.7 (Set 16 — Lore & Legends)

### Proceso de actualización

1. Buscar parche actual: `TFT current patch [año]`
2. Buscar comp: `TFT Yordle reroll comp best items [año]`
3. Fetchear las 3-4 fuentes en paralelo (tactics.tools es la más fiable por datos estadísticos)
4. Comparar items de cada campeón con los que están en la app
5. Actualizar `src/data/tabla.ts` (datos estáticos + altItems)
6. Si cambian items principales: crear script en `src/db/migrate-*.ts` y ejecutar con `npx tsx src/db/migrate-*.ts`
7. `altItems` solo requiere actualizar `tabla.ts` — no tienen persistencia en DB

### Nota sobre items no disponibles
Si una fuente recomienda un item que no está en `/tft-assets/items/`, verificar si existe en `/tft-assets/items-ddragon/` (DDragon 16.6.1, ~558 PNGs). Los `altItems` pueden usar la ruta `items-ddragon`; los items principales deben estar en `items/` para funcionar con el item picker.
