import Image from 'next/image';
import SectionWrap from '@/components/SectionWrap';
import Tooltip from '@/components/Tooltip';
import ItemTooltipContent from '@/components/Tooltip/ItemTooltipContent';
import { Item } from '@/data/build';
import styles from './ItemGallery.module.scss';

interface ItemGalleryProps {
  items: Item[];
}

export default function ItemGallery({ items }: ItemGalleryProps) {
  return (
    <SectionWrap title="Galería de Items — Build Completa" className="ItemGallery">
      <div className={styles.gallery}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.slot} item-${item.image.split('/').pop()!.replace('.png', '')}`}>
            <Tooltip content={<ItemTooltipContent item={item} />}>
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                unoptimized
              />
            </Tooltip>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
