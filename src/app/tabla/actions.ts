'use server';

import { db } from '@/db';
import { buildChampions } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function updateChampionPositions(updates: { id: number; position: number }[]) {
  await Promise.all(
    updates.map(({ id, position }) =>
      db.update(buildChampions).set({ position }).where(eq(buildChampions.id, id))
    )
  );
}
