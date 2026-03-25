import Image from 'next/image';
import Tooltip from '@/components/Tooltip';
import ItemTooltipContent from '@/components/Tooltip/ItemTooltipContent';
import { Item } from '@/data/build';
import styles from './ItemLegend.module.scss';

interface ItemLegendProps {
  items: Item[];
}

export default function ItemLegend({ items }: ItemLegendProps) {
  return (
    <div className={`${styles.box} ItemLegend`}>
      <p className={styles.title}>Todos los Items — Galería Completa</p>
      <div className={styles.row}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.chip} item-${item.image.split('/').pop()!.replace('.png', '')}`}>
            <Tooltip content={<ItemTooltipContent item={item} />}>
              <Image src={item.image} alt={item.name} width={30} height={30} unoptimized />
            </Tooltip>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
