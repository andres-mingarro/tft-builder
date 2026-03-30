import { db } from './index';
import { buildChampions } from './schema';
import { eq } from 'drizzle-orm';
import type { TableRow, TableItem, RoleStyle, PortraitVariant } from '@/data/tabla';
import type { Tag } from '@/data/build';

export async function getTableRows(buildId: number): Promise<TableRow[]> {
  const champions = await db.query.buildChampions.findMany({
    where: eq(buildChampions.buildId, buildId),
    with: { items: true, altItems: true },
    orderBy: (c, { asc }) => [asc(c.position)],
  });

  return champions.map((champ) => ({
    id: champ.id,
    name: champ.name,
    image: champ.image,
    cost: champ.cost as 1 | 2 | 3 | 4 | 5,
    portraitVariant: champ.portraitVariant as PortraitVariant,
    roleIcon: champ.roleIcon ?? '',
    roleLabel: champ.roleLabel ?? '',
    roleStyle: champ.roleStyle as RoleStyle,
    tags: JSON.parse(champ.tags) as Tag[],
    items: champ.items
      .sort((a, b) => a.slot - b.slot)
      .map((i) => ({ dbId: i.id, name: i.itemName, image: i.itemImage })) as TableItem[],
    altItems: champ.altItems
      .sort((a, b) => a.slot - b.slot)
      .map((i) => ({ dbId: i.id, name: i.itemName, image: i.itemImage })) as TableItem[],
    priority: champ.priority ?? 3,
    note: champ.note ?? '',
  }));
}
