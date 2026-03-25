import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={`${styles.header} Header`}>
      <div className={styles.traitBadge}>🐾 TFT Set 16: Lore &amp; Legends</div>
      <h1 className={styles.title}>Yordle Build Guide</h1>
      <div className={styles.meta}>
        <span className={styles.chip}>Set <strong>16</strong></span>
        <span className={styles.chip}>Yordle <strong>8</strong> · Reroll</span>
        <span className={styles.chip}>Dificultad <strong>Media</strong></span>
        <span className={styles.chip}>Placement <strong>Top 4</strong> consistente</span>
      </div>
      <Link href="/tabla" className={styles.tablaBtn}>
        Ver Tabla de Items →
      </Link>
    </header>
  );
}
