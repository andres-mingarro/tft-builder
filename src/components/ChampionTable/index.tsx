'use client';

import { useState, useCallback } from 'react';
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
import { TableRow, TableItem, RoleStyle } from '@/data/tabla';
import { Item } from '@/data/build';
import { recipes } from '@/data/recipes';
import { legendItems as defaultLegendItems } from '@/data/tabla';
import Tooltip from '@/components/Tooltip';
import ItemTooltipContent from '@/components/Tooltip/ItemTooltipContent';
import NoteTooltipContent from '@/components/Tooltip/NoteTooltipContent';
import ItemPicker from '@/components/ItemPicker';
import { updateChampionPositions, updateChampionItem, updateChampionAltItem } from '@/app/tabla/actions';
import styles from './ChampionTable.module.scss';

const roleClass: Record<RoleStyle, string> = {
  carry: styles.rCarry, ap: styles.rAp, tank: styles.rTank, flex: styles.rFlex,
};

interface ActivePicker {
  itemDbId: number;
  currentName: string;
  anchorRect: DOMRect;
  champId: number;
  slot: number;
}

interface SortableRowProps {
  row: TableRow;
  onItemClick: (item: TableItem, champId: number, slot: number, rect: DOMRect) => void;
  onAltItemClick: (item: TableItem, champId: number, slot: number, rect: DOMRect) => void;
}

function SortableRow({ row, onItemClick, onAltItemClick }: SortableRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: row.id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <tr ref={setNodeRef} style={style} className={isDragging ? styles.rowDragging : undefined}>
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
              <div className={styles.coins}>
                {Array.from({ length: row.cost }, (_, i) => (
                  <span key={i} className={styles.coin}>🪙</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className={styles.roleCell}>
          <span className={`${styles.roleBadge} ${roleClass[row.roleStyle]}`}>
            {row.roleIcon} {row.roleLabel}
          </span>
          <div className={styles.stars}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < row.priority ? styles.star : styles.starEmpty}>★</span>
            ))}
          </div>
        </div>
      </td>
      <td>
        <div className={styles.traitsCell}>
          {row.tags.map((tag) => (
            <span
              key={tag.label}
              className={`${styles.ttag} ${tag.type === 'yordle' ? styles.ttY : tag.type === 'noxus' ? styles.ttN : styles.ttO}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className={styles.itemsCell}>
          {row.items.map((item, slot) => {
            const recipe = recipes[item.name];
            return (
              <div
                key={item.dbId ?? `${row.id}-${slot}`}
                className={`${styles.itemSlot} item-${item.image.split('/').pop()!.replace('.png', '')}`}
              >
                <Tooltip content={<ItemTooltipContent item={item} />}>
                  <div className={styles.imgInner}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={54}
                      height={54}
                      unoptimized
                      style={{ cursor: item.dbId ? 'pointer' : 'default' }}
                      onClick={(e) => {
                        if (!item.dbId) return;
                        e.stopPropagation();
                        onItemClick(item, row.id, slot, (e.currentTarget as HTMLElement).getBoundingClientRect());
                      }}
                    />
                    {item.dbId && <span className={styles.pencilIcon}>✎</span>}
                  </div>
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
      <td>
        <div className={styles.altItemsCell}>
          {row.altItems?.map((item, slot) => {
            const recipe = recipes[item.name];
            return (
              <div key={item.dbId ?? `alt-${row.id}-${slot}`} className={styles.altItemSlot}>
                <Tooltip content={<ItemTooltipContent item={item} />}>
                  <div className={styles.imgInner}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={42}
                      height={42}
                      unoptimized
                      className={styles.altItemImg}
                      style={{ cursor: item.dbId ? 'pointer' : 'default' }}
                      onClick={(e) => {
                        if (!item.dbId) return;
                        e.stopPropagation();
                        onAltItemClick(item, row.id, slot, (e.currentTarget as HTMLElement).getBoundingClientRect());
                      }}
                    />
                    {item.dbId && <span className={styles.pencilIcon}>✎</span>}
                  </div>
                </Tooltip>
                {recipe && (
                  <div className={styles.altComponents}>
                    {recipe.map((comp, j) => (
                      <Image
                        key={j}
                        src={comp.image}
                        alt={comp.name}
                        title={comp.name}
                        width={21}
                        height={21}
                        unoptimized
                        className={styles.altCompImg}
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
  legendItems?: Item[];
}

export default function ChampionTable({ rows: initialRows, legendItems = defaultLegendItems }: ChampionTableProps) {
  const [rows, setRows] = useState(initialRows);
  const [activePicker, setActivePicker] = useState<ActivePicker | null>(null);
  const [activeAltPicker, setActiveAltPicker] = useState<ActivePicker | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = rows.findIndex((r) => r.id === active.id);
    const newIndex = rows.findIndex((r) => r.id === over.id);
    const newRows = arrayMove(rows, oldIndex, newIndex);
    setRows(newRows);
    await updateChampionPositions(newRows.map((r, i) => ({ id: r.id, position: i })));
  }

  const handleItemClick = useCallback(
    (item: TableItem, champId: number, slot: number, rect: DOMRect) => {
      setActivePicker({ itemDbId: item.dbId!, currentName: item.name, anchorRect: rect, champId, slot });
    },
    []
  );

  const handleAltItemClick = useCallback(
    (item: TableItem, champId: number, slot: number, rect: DOMRect) => {
      setActiveAltPicker({ itemDbId: item.dbId!, currentName: item.name, anchorRect: rect, champId, slot });
    },
    []
  );

  async function handleItemSelect(newItem: Item) {
    if (!activePicker) return;
    const { itemDbId, champId, slot } = activePicker;
    setRows((prev) =>
      prev.map((row) =>
        row.id !== champId
          ? row
          : { ...row, items: row.items.map((item, i) => i === slot ? { ...item, name: newItem.name, image: newItem.image } : item) }
      )
    );
    setActivePicker(null);
    await updateChampionItem(itemDbId, newItem.name, newItem.image);
  }

  async function handleAltItemSelect(newItem: Item) {
    if (!activeAltPicker) return;
    const { itemDbId, champId, slot } = activeAltPicker;
    setRows((prev) =>
      prev.map((row) =>
        row.id !== champId
          ? row
          : { ...row, altItems: row.altItems?.map((item, i) => i === slot ? { ...item, name: newItem.name, image: newItem.image } : item) }
      )
    );
    setActiveAltPicker(null);
    await updateChampionAltItem(itemDbId, newItem.name, newItem.image);
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
              <th>Items Alternativos</th>
            </tr>
          </thead>
          <tbody>
            <SortableContext items={rows.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              {rows.map((row) => (
                <SortableRow key={row.id} row={row} onItemClick={handleItemClick} onAltItemClick={handleAltItemClick} />
              ))}
            </SortableContext>
          </tbody>
        </table>
      </DndContext>

      {activePicker && (
        <ItemPicker
          currentItem={activePicker.currentName}
          options={legendItems}
          anchorRect={activePicker.anchorRect}
          onSelect={handleItemSelect}
          onClose={() => setActivePicker(null)}
        />
      )}
      {activeAltPicker && (
        <ItemPicker
          currentItem={activeAltPicker.currentName}
          options={legendItems}
          anchorRect={activeAltPicker.anchorRect}
          onSelect={handleAltItemSelect}
          onClose={() => setActiveAltPicker(null)}
        />
      )}
    </div>
  );
}
