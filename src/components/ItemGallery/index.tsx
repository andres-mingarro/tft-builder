import Image from 'next/image';
import SectionWrap from '@/components/SectionWrap';
import { Item } from '@/data/build';
import styles from './ItemGallery.module.scss';

interface ItemGalleryProps {
  items: Item[];
}

export default function ItemGallery({ items }: ItemGalleryProps) {
  return (
    <SectionWrap title="Galería de Items — Build Completa">
      <div className={styles.gallery}>
        {items.map((item, i) => (
          <div key={i} className={styles.slot}>
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              unoptimized
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
