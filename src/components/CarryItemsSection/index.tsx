import Image from 'next/image';
import SectionWrap from '@/components/SectionWrap';
import { CarryBuild } from '@/data/build';
import styles from './CarryItemsSection.module.scss';

interface CarryItemsSectionProps {
  carries: CarryBuild[];
}

export default function CarryItemsSection({ carries }: CarryItemsSectionProps) {
  return (
    <SectionWrap title="Items por Carry">
      <div className={styles.grid}>
        {carries.map((carry) => (
          <div
            key={carry.champion}
            className={`${styles.box} ${carry.isMain ? styles.main : ''}`}
          >
            <div className={styles.header}>
              <Image
                className={styles.portrait}
                src={carry.image}
                alt={carry.champion}
                width={48}
                height={48}
                unoptimized
              />
              <div className={styles.info}>
                <h3>{carry.champion} — {carry.role}</h3>
                <p>{carry.description}</p>
              </div>
            </div>
            <div className={styles.itemsRow}>
              {carry.items.map((item, i) => (
                <div key={i} className={styles.itemSlot}>
                  <Image
                    className={styles.itemImg}
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    unoptimized
                  />
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
