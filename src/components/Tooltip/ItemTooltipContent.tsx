import { Item } from '@/data/build';
import { itemStats } from '@/data/recipes';
import styles from './Tooltip.module.scss';

function renderStyled(text: string): React.ReactNode {
  const regex = /(<r>)(.*?)(<\/r>)|(\+[\d.]+%?)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      parts.push(<span key={key++} className={styles.numNeg}>{match[2]}</span>);
    } else if (match[4] !== undefined) {
      parts.push(<span key={key++} className={styles.numPos}>{match[4]}</span>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function ItemTooltipContent({ item }: { item: Item }) {
  const data = itemStats[item.name];
  return (
    <div className={styles.itemContent}>
      <p className={styles.itemName}>{item.name}</p>
      {data && (
        <>
          <ul className={styles.statsList}>
            {data.stats.map((s, i) => (
              <li key={i} className={styles.stat}>{renderStyled(s)}</li>
            ))}
          </ul>
          {data.passive && (
            <p className={styles.passive}>{renderStyled(data.passive)}</p>
          )}
        </>
      )}
    </div>
  );
}
