/**
 * Seed inicial: carga los datos en la base de datos.
 * Correr una sola vez con: npm run db:seed
 */
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import path from 'path';
import { traits, augments, tips } from '../data/build';
import { tableRows } from '../data/tabla';

const dbPath = path.join(process.cwd(), 'database', 'tft.db');
const client = createClient({ url: `file:${dbPath}` });
const db = drizzle(client, { schema });

async function seed() {
  console.log('Seeding build: Yordle 8 Reroll...');

  // Insertar la build principal
  const [build] = await db
    .insert(schema.builds)
    .values({
      name: 'Yordle 8 Reroll',
      set: '16',
      description: 'Comp de Yordles con 8 unidades activas. Carries: Teemo y Veigar.',
      notes: 'Rollear agresivo en nivel 6-7. Objetivo: llegar a nivel 9 con Ziggs.',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .returning();

  console.log(`Build creada con id=${build.id}`);

  // Insertar traits
  await db.insert(schema.buildTraits).values(
    traits.map((t) => ({
      buildId: build.id,
      name: t.name,
      count: t.count,
      type: t.type,
      highlighted: t.highlighted ?? false,
    }))
  );
  console.log(`${traits.length} traits insertados`);

  // Insertar campeones y sus items desde tableRows (datos completos)
  for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    const [insertedChamp] = await db
      .insert(schema.buildChampions)
      .values({
        buildId: build.id,
        name: row.name,
        cost: row.cost,
        role: row.portraitVariant,
        portraitVariant: row.portraitVariant,
        roleIcon: row.roleIcon,
        roleLabel: row.roleLabel,
        roleStyle: row.roleStyle,
        priority: row.priority,
        note: row.note,
        tags: JSON.stringify(row.tags),
        image: row.image,
        position: i,
      })
      .returning();

    for (let slot = 0; slot < row.items.length; slot++) {
      await db.insert(schema.buildChampionItems).values({
        buildChampionId: insertedChamp.id,
        itemName: row.items[slot].name,
        itemImage: row.items[slot].image,
        slot: slot + 1,
      });
    }
  }
  console.log(`${tableRows.length} campeones insertados`);

  // Insertar augments
  await db.insert(schema.buildAugments).values(
    augments.map((a) => ({
      buildId: build.id,
      name: a.name,
      tier: a.tier,
      description: a.description,
      icon: a.icon,
    }))
  );
  console.log(`${augments.length} augments insertados`);

  // Insertar tips
  await db.insert(schema.buildTips).values(
    tips.map((t, i) => ({
      buildId: build.id,
      icon: t.icon,
      text: t.text,
      position: i,
    }))
  );
  console.log(`${tips.length} tips insertados`);

  console.log('✓ Seed completado');
  client.close();
}

seed().catch((err) => {
  console.error('Error en seed:', err);
  process.exit(1);
});
