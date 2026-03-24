import Image from 'next/image';
import { Item } from '@/data/build';
import styles from './ItemLegend.module.scss';

interface ItemLegendProps {
  items: Item[];
}

export default function ItemLegend({ items }: ItemLegendProps) {
  return (
    <div className={styles.box}>
      <p className={styles.title}>Todos los Items — Galería Completa</p>
      <div className={styles.row}>
        {items.map((item, i) => (
          <div key={i} className={styles.chip}>
            <Image src={item.image} alt={item.name} width={30} height={30} unoptimized />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
