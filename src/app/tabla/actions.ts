'use server';

import { db } from '@/db';
import { buildChampions, buildChampionItems } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function updateChampionPositions(updates: { id: number; position: number }[]) {
  await Promise.all(
    updates.map(({ id, position }) =>
      db.update(buildChampions).set({ position }).where(eq(buildChampions.id, id))
    )
  );
}

export async function updateChampionItem(
  itemDbId: number,
  itemName: string,
  itemImage: string,
) {
  await db
    .update(buildChampionItems)
    .set({ itemName, itemImage })
    .where(eq(buildChampionItems.id, itemDbId));
}
