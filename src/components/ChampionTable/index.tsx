'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableRow, RoleStyle } from '@/data/tabla';
import { recipes } from '@/data/recipes';
import Tooltip from '@/components/Tooltip';
import ItemTooltipContent from '@/components/Tooltip/ItemTooltipContent';
import NoteTooltipContent from '@/components/Tooltip/NoteTooltipContent';
import { updateChampionPositions } from '@/app/tabla/actions';
import styles from './ChampionTable.module.scss';

const costClass: Record<number, string> = {
  1: styles.c1, 2: styles.c2, 3: styles.c3, 4: styles.c4,
};
const costLabel: Record<number, string> = {
  1: '1 Gold', 2: '2 Gold', 3: '3 Gold', 4: '4 Gold',
};
const roleClass: Record<RoleStyle, string> = {
  carry: styles.rCarry, ap: styles.rAp, tank: styles.rTank, flex: styles.rFlex,
};

function SortableRow({ row }: { row: TableRow }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={isDragging ? styles.rowDragging : undefined}
    >
      <td>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={styles.dragHandle} {...attributes} {...listeners}>⠿</span>
          <div className={styles.champCell}>
            <div className={`${styles.portraitWrap} ${styles[row.portraitVariant]}`}>
              <Tooltip content={<NoteTooltipContent text={row.note} />}>
                <Image src={row.image} alt={row.name} width={60} height={60} unoptimized />
              </Tooltip>
              {row.portraitVariant === 'carry' && (
                <span className={`${styles.plabel} ${styles.plabelCarry}`}>CARRY</span>
              )}
              {row.portraitVariant === 'unlock' && (
                <span className={`${styles.plabel} ${styles.plabelUnlock}`}>🔓</span>
              )}
            </div>
            <div className={styles.champInfo}>
              <div className={styles.champName}>{row.name}</div>
              <span className={`${styles.costBadge} ${costClass[row.cost]}`}>
                {costLabel[row.cost]}
              </span>
              <div className={styles.stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < row.priority ? styles.star : styles.starEmpty}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className={`${styles.roleBadge} ${roleClass[row.roleStyle]}`}>
          {row.roleIcon} {row.roleLabel}
        </span>
      </td>
      <td>
        <div className={styles.traitsCell}>
          {row.tags.map((tag) => (
            <span
              key={tag.label}
              className={`${styles.ttag} ${tag.type === 'yordle' ? styles.ttY : styles.ttO}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className={styles.itemsCell}>
          {row.items.map((item, i) => {
            const recipe = recipes[item.name];
            return (
              <div key={i} className={`${styles.itemSlot} item-${item.image.split('/').pop()!.replace('.png', '')}`}>
                <Tooltip content={<ItemTooltipContent item={item} />}>
                  <Image src={item.image} alt={item.name} width={54} height={54} unoptimized />
                </Tooltip>
                {recipe && (
                  <div className={styles.components}>
                    {recipe.map((comp, j) => (
                      <Image
                        key={j}
                        src={comp.image}
                        alt={comp.name}
                        title={comp.name}
                        width={27}
                        height={27}
                        unoptimized
                        className={styles.compImg}
                        style={{ width: 27, height: 27 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </td>
    </tr>
  );
}

interface ChampionTableProps {
  rows: TableRow[];
}

export default function ChampionTable({ rows: initialRows }: ChampionTableProps) {
  const [rows, setRows] = useState(initialRows);

  const sensors = useSensors(useSensor(PointerSensor));

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = rows.findIndex((r) => r.id === active.id);
    const newIndex = rows.findIndex((r) => r.id === over.id);
    const newRows = arrayMove(rows, oldIndex, newIndex);

    setRows(newRows);

    await updateChampionPositions(
      newRows.map((r, i) => ({ id: r.id, position: i }))
    );
  }

  return (
    <div className={`${styles.tableWrap} ChampionTable`}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <table>
          <thead>
            <tr>
              <th>Campeón</th>
              <th>Rol</th>
              <th>Traits</th>
              <th>Items Recomendados</th>
            </tr>
          </thead>
          <tbody>
            <SortableContext items={rows.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              {rows.map((row) => (
                <SortableRow key={row.id} row={row} />
              ))}
            </SortableContext>
          </tbody>
        </table>
      </DndContext>
    </div>
  );
}
