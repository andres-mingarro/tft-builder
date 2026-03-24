import type { Metadata } from 'next';
import ChampionTable from '@/components/ChampionTable';
import ItemLegend from '@/components/ItemLegend';
import Footer from '@/components/Footer';
import { tableRows, legendItems } from '@/data/tabla';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'TFT Set 16 — Yordle Tabla de Items',
};

export default function TablaPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.badge}>🐾 TFT Set 16: Lore &amp; Legends</div>
        <h1 className={styles.title}>Yordle Build — Items Originales</h1>
        <p className={styles.subtitle}>
          Set 16 · Yordle 8 Reroll · Items recomendados por campeón con imágenes reales
        </p>
      </header>
      <div className={styles.wrapper}>
        <ChampionTable rows={tableRows} />
        <ItemLegend items={legendItems} />
      </div>
      <Footer />
    </>
  );
}
