/**
 * Migración: actualiza items según patch 16.7
 *   - Teemo slot 1: Guinsoo's Rageblade → Statikk Shiv
 *   - Fizz slot 1: Jeweled Gauntlet → Thief's Gloves
 *   - Fizz slot 2: Rabadon's Deathcap → Jeweled Gauntlet
 *   - Fizz slot 3: Blue Buff → Rabadon's Deathcap
 *   - Agrega Ziggs (4-cost, Yordle + Zaun) con items
 *
 * Correr con: npx tsx src/db/migrate-patch-items.ts
 */
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'tft.db');
const client = createClient({ url: `file:${dbPath}` });
const db = drizzle(client, { schema });

async function migrate() {
  // Teemo slot 1: Guinsoo's → Statikk Shiv
  await db
    .update(schema.buildChampionItems)
    .set({ itemName: "Statikk Shiv", itemImage: "/tft-assets/items/StatikkShiv.png" })
    .where(require('drizzle-orm').eq(schema.buildChampionItems.id, 1));
  console.log('✓ Teemo slot 1 → Statikk Shiv');

  // Fizz slot 1: Jeweled Gauntlet → Thief's Gloves
  await db
    .update(schema.buildChampionItems)
    .set({ itemName: "Thief's Gloves", itemImage: "/tft-assets/items/ThiefsGloves.png" })
    .where(require('drizzle-orm').eq(schema.buildChampionItems.id, 7));
  console.log("✓ Fizz slot 1 → Thief's Gloves");

  // Fizz slot 2: Rabadon's → Jeweled Gauntlet
  await db
    .update(schema.buildChampionItems)
    .set({ itemName: "Jeweled Gauntlet", itemImage: "/tft-assets/items/JeweledGauntlet.png" })
    .where(require('drizzle-orm').eq(schema.buildChampionItems.id, 8));
  console.log('✓ Fizz slot 2 → Jeweled Gauntlet');

  // Fizz slot 3: Blue Buff → Rabadon's Deathcap
  await db
    .update(schema.buildChampionItems)
    .set({ itemName: "Rabadon's Deathcap", itemImage: "/tft-assets/items/RabadonsDeathcap.png" })
    .where(require('drizzle-orm').eq(schema.buildChampionItems.id, 9));
  console.log("✓ Fizz slot 3 → Rabadon's Deathcap");

  // Agregar Ziggs (buildId=1, position=9)
  const [ziggs] = await db
    .insert(schema.buildChampions)
    .values({
      buildId: 1,
      name: 'Ziggs',
      cost: 4,
      role: 'unlock',
      portraitVariant: 'unlock',
      roleIcon: '💥',
      roleLabel: 'Carry AP',
      roleStyle: 'ap',
      priority: 4,
      note: 'Desbloquear: llegar a nivel 9 con un Yordle o Zaunita con 3 ítems. Rageblade + Jeweled Gauntlet para crits AP continuos.',
      tags: JSON.stringify([
        { label: 'Yordle', type: 'yordle' },
        { label: 'Zaun', type: 'other' },
      ]),
      image: '/tft-assets/champions/Ziggs.png',
      position: 9,
    })
    .returning();
  console.log(`✓ Ziggs insertado con id=${ziggs.id}`);

  await db.insert(schema.buildChampionItems).values([
    { buildChampionId: ziggs.id, itemName: "Guinsoo's Rageblade", itemImage: "/tft-assets/items/GuinsoosRageblade.png", slot: 1 },
    { buildChampionId: ziggs.id, itemName: "Jeweled Gauntlet", itemImage: "/tft-assets/items/JeweledGauntlet.png", slot: 2 },
    { buildChampionId: ziggs.id, itemName: "Rabadon's Deathcap", itemImage: "/tft-assets/items/RabadonsDeathcap.png", slot: 3 },
  ]);
  console.log('✓ Items de Ziggs insertados');

  console.log('\n✓ Migración completada');
  client.close();
}

migrate().catch((err) => {
  console.error('Error en migración:', err);
  client.close();
  process.exit(1);
});
