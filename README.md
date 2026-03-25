# TFT Builder

Guía interactiva de builds para **TFT Set 16: Lore & Legends**, construida con Next.js.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Guía completa de la build Yordle 8 Reroll |
| `/tabla` | Tabla de items recomendados por campeón |

## Stack

- [Next.js 14](https://nextjs.org/) — App Router
- TypeScript
- SCSS Modules
- [Drizzle ORM](https://orm.drizzle.team/) + better-sqlite3 — base de datos local

## Instalación

```bash
npm install
```

Primera vez (inicializar la base de datos):

```bash
npm run db:migrate   # crea las tablas en database/tft.db
npm run db:seed      # carga los datos iniciales
```

Luego, desarrollo normal:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Base de datos

Los datos de builds se almacenan en un archivo SQLite local (`database/tft.db`).

| Comando | Descripción |
| ------- | ----------- |
| `npm run db:studio` | UI visual para editar datos (localhost:4983) |
| `npm run db:generate` | Genera una migración al modificar `src/db/schema.ts` |
| `npm run db:migrate` | Aplica las migraciones pendientes |
| `npm run db:seed` | Carga los datos iniciales (solo correr una vez) |

El archivo `database/tft.db` está en `.gitignore`. Las migraciones (`database/migrations/`) sí se versionan.

## Assets

Las imágenes de campeones e items provienen de:

- [Community Dragon](https://raw.communitydragon.org)
- [Data Dragon (Riot)](https://ddragon.leagueoflegends.com) — parche `16.6.1`
