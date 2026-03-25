import styles from './Tooltip.module.scss';

export default function NoteTooltipContent({ text }: { text: string }) {
  return <p className={styles.note}>{text}</p>;
}
