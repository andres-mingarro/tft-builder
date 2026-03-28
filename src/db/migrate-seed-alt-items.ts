/**
 * Seed inicial de build_champion_alt_items desde tabla.ts
 * Correr con: npx tsx src/db/migrate-seed-alt-items.ts
 */
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { tableRows } from '../data/tabla';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'tft.db');
const client = createClient({ url: `file:${dbPath}` });
const db = drizzle(client, { schema });

async function seed() {
  const champions = await db.query.buildChampions.findMany({
    where: eq(schema.buildChampions.buildId, 1),
  });

  for (const champ of champions) {
    const staticRow = tableRows.find((r) => r.name === champ.name);
    if (!staticRow?.altItems?.length) continue;

    for (let slot = 0; slot < staticRow.altItems.length; slot++) {
      const item = staticRow.altItems[slot];
      await db.insert(schema.buildChampionAltItems).values({
        buildChampionId: champ.id,
        itemName: item.name,
        itemImage: item.image,
        slot: slot + 1,
      });
    }
    console.log(`✓ ${champ.name}: ${staticRow.altItems.length} alt items`);
  }

  console.log('\n✓ Alt items seeded');
  client.close();
}

seed().catch((err) => {
  console.error(err);
  client.close();
  process.exit(1);
});
