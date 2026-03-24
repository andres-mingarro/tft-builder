import SectionWrap from '@/components/SectionWrap';
import { Trait } from '@/data/build';
import styles from './TraitsSection.module.scss';

interface TraitsSectionProps {
  traits: Trait[];
}

export default function TraitsSection({ traits }: TraitsSectionProps) {
  return (
    <SectionWrap title="Traits Activos">
      <div className={styles.row}>
        {traits.map((trait) => (
          <div
            key={trait.name}
            className={`${styles.chip} ${trait.highlighted ? styles.highlighted : ''}`}
          >
            <span className={`${styles.dot} ${styles[`dot_${trait.type}`]}`} />
            {trait.name}
            <span className={`${styles.count} ${trait.type === 'gold' ? styles.countGold : ''}`}>
              {trait.count}
            </span>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
