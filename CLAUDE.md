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
│   ├── icon.png            # favicon (Teemo portrait 64x64)
│   ├── page.tsx            # ruta / → guía de build Yordle
│   ├── page.module.scss
│   ├── globals.scss        # variables CSS + reset global
│   └── tabla/
│       ├── page.tsx        # ruta /tabla → tabs Yordle / Noxus
│       ├── page.module.scss
│       └── actions.ts      # server actions: updateChampionPositions, updateChampionItem, updateChampionAltItem
├── components/
│   ├── AugmentsSection/    # grid de augments (prismatic/gold/silver)
│   ├── BuildTabs/          # tabs Yordle/Noxus con URL sync (?tab=)
│   ├── CarryItemsSection/  # items por carry con portrait
│   ├── ChampionTable/      # tabla con drag-and-drop, item picker, items alternativos
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
    ├── tabla.ts            # legendItems y noxusLegendItems (para item picker de cada tab)
    └── recipes.ts          # recetas de items: componentes por item + itemStats para tooltips
```

## Convenciones

- Cada componente vive en `src/components/NombreComponente/` con su `index.tsx` y `NombreComponente.module.scss`
- Los datos están centralizados en `src/data/` — nunca hardcodear datos en los componentes
- Las rutas de imágenes usan `/tft-assets/...` (relativas a `public/`)
- Los selectores globales de elementos (`thead`, `tbody`, `td`) deben ir **anidados** dentro de una clase en los CSS modules, nunca sueltos

## Modelo de datos — `/tabla`

### `TableRow` (tabla.ts)
| Campo             | Tipo                       | Descripción                                      |
|-------------------|----------------------------|--------------------------------------------------|
| `id`              | `number`                   | PK (coincide con DB)                             |
| `items`           | `TableItem[]`              | Items principales (3); cada uno con `dbId` de DB |
| `altItems`        | `TableItem[]`              | Items alternativos (3); también con `dbId`       |
| `priority`        | `1–5`                      | Estrellas de prioridad                           |
| `cost`            | `1\|2\|3\|4\|5`            | Coste en oro del campeón                         |
| `portraitVariant` | `carry\|unlock\|default`   | Estilo del borde del portrait                    |
| `tags`            | `Tag[]`                    | Traits; type: `'yordle'\|'noxus'\|'other'`       |

- `TableItem` extiende `Item` con `dbId` (FK a `build_champion_items` o `build_champion_alt_items`)
- Tanto `items` como `altItems` persisten en DB y son editables con el item picker

### ChampionTable (componente)
- Prop `legendItems?: Item[]` — lista de items disponibles en el picker (default: `legendItems` de Yordle)
- Prop `key={activeTab}` en `BuildTabs` fuerza remount al cambiar tab (necesario por `useState` interno)
- Drag-and-drop de filas con `@dnd-kit/core` → persiste orden en DB vía `updateChampionPositions`
- Click en item → abre `ItemPicker` → persiste cambio en DB vía `updateChampionItem` / `updateChampionAltItem`
- Columnas: Campeón · Rol · Traits · Items Recomendados · Items Alternativos

### BuildTabs (componente)
- Tab activo sincronizado con URL: `/tabla?tab=yordle` (default) y `/tabla?tab=noxus`
- Usa `useSearchParams` + `router.replace(..., { scroll: false })`
- Cada tab tiene su propio array `legendItems` para el item picker

## Assets

```
public/tft-assets/
├── champions/    # portraits PNG; nombrados {NombreChampion}.png  (ej: Draven.png)
└── items/        # todos los items PNG; nombrados {NombreItem}.png (ej: GuinsoosRageblade.png)
```

**Convención de nombres:** CamelCase sin prefijos ni espacios. `GuinsoosRageblade.png`, no `TFT_Item_GuinsoosRageblade.png`.

### Descargar portraits de campeones
```bash
# Community Dragon sirve PNG 128x128 directamente
curl -sL "https://cdn.communitydragon.org/latest/champion/{NombreChampion}/square" -o "public/tft-assets/champions/{NombreChampion}.png"

# Ejemplo en batch (desde raíz del proyecto)
for champ in Draven Darius LeBlanc; do
  curl -sL "https://cdn.communitydragon.org/latest/champion/${champ}/square" \
    -o "public/tft-assets/champions/${champ}.png"
done
```

### Descargar items desde DDragon
Si falta un item, buscar primero en `public/tft-assets/items/`. Si no existe:
```bash
# DDragon 16.6.1 — patrón de nombre: TFT_Item_{NombreItem}.png
# Renombrar al copiar para mantener la convención limpia:
cp items-ddragon/TFT_Item_Deathblade.png items/Deathblade.png
```
Si se añaden items nuevos a `items/`, actualizar también las rutas en DB si ya fueron insertadas (ver sección migración).

## Base de datos

**Motor:** SQLite con Drizzle ORM + libsql. Archivo: `database/tft.db`

### Builds actuales en DB
| buildId | Nombre          | Tab URL          |
|---------|-----------------|------------------|
| 1       | Yordle 8 Reroll | `/tabla?tab=yordle` (default) |
| 2       | Noxus Reroll    | `/tabla?tab=noxus`  |

### Esquema resumido
- `builds` — una fila por comp (id, name, set, description)
- `buildChampions` — campeones de cada comp (buildId FK, name, cost, role, image, position, tags JSON, ...)
- `buildChampionItems` — items principales (buildChampionId FK, itemName, itemImage, slot 1-3)
- `buildChampionAltItems` — items alternativos (misma estructura)

Scripts de migración en `src/db/migrate-*.ts`. Ejecutar con:
```bash
npx tsx src/db/migrate-seed-noxus.ts
```

## Añadir un nuevo tab / build

Proceso completo para agregar una nueva comp (ej: Bruiser):

### 1. Buscar datos del meta
```
TFT Set 16 {Trait} reroll best items {año}
```
Fuentes en paralelo:
| Fuente | Uso |
|--------|-----|
| `https://tactics.tools/units/{champion}` | Win rate + items más jugados con % |
| `https://u.gg/tft/comps/{comp-name}` | Comp completa con items por rol |
| `https://tftacademy.com/tierlist/comps/set-16-{comp}` | Guía narrativa |
| `https://mobalytics.gg/tft/comps-guide/{comp}-...` | Items alternativos |

### 2. Descargar portraits
```bash
for champ in Champ1 Champ2 Champ3; do
  curl -sL "https://cdn.communitydragon.org/latest/champion/${champ}/square" \
    -o "public/tft-assets/champions/${champ}.png"
done
```

### 3. Verificar/añadir items
Revisar que todos los items necesarios estén en `public/tft-assets/items/`. Si falta alguno, copiarlo desde DDragon con el nombre limpio.

### 4. Crear script de migración
Copiar `src/db/migrate-seed-noxus.ts` como plantilla. Estructura mínima:
```typescript
// Insertar en builds → obtener buildId
// Para cada campeón: insertar en buildChampions → obtener champId
// Insertar items en buildChampionItems (slots 1-3)
// Insertar altItems en buildChampionAltItems (slots 1-3)
```
Ejecutar: `npx tsx src/db/migrate-seed-{nombre}.ts`

### 5. Añadir legendItems en tabla.ts
```typescript
export const {nombre}LegendItems: Item[] = [
  { name: 'Item Name', image: '/tft-assets/items/ItemName.png' },
  // ... todos los items usados en esta build
];
```

### 6. Actualizar BuildTabs
En `src/components/BuildTabs/index.tsx`:
- Añadir el nuevo tab al estado y los botones
- Pasar `rows` y `legendItems` correspondientes

En `src/app/tabla/page.tsx`:
- Añadir `getTableRows(buildId)` al `Promise.all`
- Pasar los datos al nuevo tab en `BuildTabs`

### 7. (Opcional) Añadir tag type y color
Si el nuevo trait necesita color propio:
- Añadir `'{nombre}'` a `TagType` en `src/data/build.ts`
- Añadir clase `.tt{X}` en `ChampionTable.module.scss`
- Actualizar el ternario de className en `ChampionTable/index.tsx`

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

Colores Noxus (inline en BuildTabs/ChampionTable, no en globals):
- Tag Noxus: `rgba(192, 57, 43, 0.22)` / texto `#f4a09a`
- Tab activo Noxus: `rgba(192, 57, 43, 0.18)` / borde `#c0392b`

## Comandos

```bash
npm run dev    # desarrollo en localhost:3000
npm run build  # build de producción
npm run lint   # linter
npx tsx src/db/migrate-{nombre}.ts  # ejecutar script de migración
```

## Rutas

| Ruta              | Descripción                              |
|-------------------|------------------------------------------|
| `/`               | Guía de build Yordle 8 Reroll completa   |
| `/tabla`          | Tabla Yordle (tab default)               |
| `/tabla?tab=noxus`| Tabla Noxus Reroll                       |

## Parche verificado

**16.7** (Set 16 — Lore & Legends)
