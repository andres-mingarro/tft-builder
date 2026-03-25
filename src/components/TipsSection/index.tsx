import SectionWrap from '@/components/SectionWrap';
import { Tip } from '@/data/build';
import styles from './TipsSection.module.scss';

interface TipsSectionProps {
  tips: Tip[];
}

export default function TipsSection({ tips }: TipsSectionProps) {
  return (
    <SectionWrap title="Tips de Juego" className="TipsSection">
      <ul className={styles.grid}>
        {tips.map((tip, i) => (
          <li key={i}>
            <span className={styles.icon}>{tip.icon}</span>
            <span dangerouslySetInnerHTML={{ __html: tip.text }} />
          </li>
        ))}
      </ul>
    </SectionWrap>
  );
}
