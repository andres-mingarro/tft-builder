import Image from 'next/image';
import SectionWrap from '@/components/SectionWrap';
import { Champion } from '@/data/build';
import styles from './ChampionsSection.module.scss';

const costClass: Record<number, string> = {
  1: styles.c1,
  2: styles.c2,
  3: styles.c3,
  4: styles.c4,
};

const costLabel: Record<number, string> = {
  1: '1 Gold',
  2: '2 Gold',
  3: '3 Gold',
  4: '4 Gold',
};

interface ChampionsSectionProps {
  champions: Champion[];
}

export default function ChampionsSection({ champions }: ChampionsSectionProps) {
  return (
    <SectionWrap title="Campeones — Board Final">
      <div className={styles.grid}>
        {champions.map((champ) => (
          <div
            key={champ.name}
            className={`${styles.card} ${champ.role === 'carry' ? styles.carry : ''} ${champ.role === 'unlock' ? styles.unlock : ''}`}
          >
            {champ.role === 'carry' && <span className={styles.carryLabel}>★ CARRY</span>}
            {champ.role === 'unlock' && <span className={styles.unlockLabel}>🔓 UNLOCK</span>}
            <Image
              className={styles.portrait}
              src={champ.image}
              alt={champ.name}
              width={72}
              height={72}
              unoptimized
            />
            <div className={styles.name}>{champ.name}</div>
            <span className={`${styles.costBadge} ${costClass[champ.cost]}`}>
              {costLabel[champ.cost]}
            </span>
            <div className={styles.tags}>
              {champ.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`${styles.tag} ${tag.type === 'yordle' ? styles.tagYordle : styles.tagOther}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
