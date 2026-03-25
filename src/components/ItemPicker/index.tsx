'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Item } from '@/data/build';
import styles from './ItemPicker.module.scss';

interface ItemPickerProps {
  currentItem: string;
  options: Item[];
  anchorRect: DOMRect;
  onSelect: (item: Item) => void;
  onClose: () => void;
}

export default function ItemPicker({
  currentItem,
  options,
  anchorRect,
  onSelect,
  onClose,
}: ItemPickerProps) {
  const pickerRef = useRef<HTMLDivElement>(null);

  // Posicionar debajo del item clickeado, ajustando si se sale de la pantalla
  const top = anchorRect.bottom + 8;
  const left = anchorRect.left + anchorRect.width / 2;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        ref={pickerRef}
        className={styles.picker}
        style={{ top, left, transform: 'translateX(-50%)' }}
      >
        <div className={styles.title}>Elegir item</div>
        <div className={styles.grid}>
          {options.map((item) => (
            <div
              key={item.name}
              className={`${styles.item} ${item.name === currentItem ? styles.selected : ''}`}
              onClick={() => onSelect(item)}
            >
              <Image src={item.image} alt={item.name} width={44} height={44} unoptimized />
              <span className={styles.itemName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
