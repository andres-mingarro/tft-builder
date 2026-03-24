import SectionWrap from '@/components/SectionWrap';
import { Augment } from '@/data/build';
import styles from './AugmentsSection.module.scss';

const tierLabel: Record<string, string> = {
  prismatic: 'PRISMÁTICO',
  gold: 'ORO',
  silver: 'PLATA',
};

interface AugmentsSectionProps {
  augments: Augment[];
}

export default function AugmentsSection({ augments }: AugmentsSectionProps) {
  return (
    <SectionWrap title="Mejores Augments">
      <div className={styles.grid}>
        {augments.map((aug) => (
          <div key={aug.name} className={`${styles.card} ${styles[aug.tier]}`}>
            <div className={styles.icon}>{aug.icon}</div>
            <div>
              <div className={`${styles.tier} ${styles[`tier_${aug.tier}`]}`}>
                {tierLabel[aug.tier]}
              </div>
              <div className={styles.name}>{aug.name}</div>
              <div className={styles.desc}>{aug.description}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
