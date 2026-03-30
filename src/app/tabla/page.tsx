import type { Metadata } from 'next';
import { Suspense } from 'react';
import BuildTabs from '@/components/BuildTabs';
import Footer from '@/components/Footer';
import { getTableRows } from '@/db/queries';
import { legendItems, noxusLegendItems } from '@/data/tabla';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'TFT Set 16 — Tabla de Items',
};

export default async function TablaPage() {
  const [yordle, noxus] = await Promise.all([
    getTableRows(1),
    getTableRows(2),
  ]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.badge}>⚔️ TFT Set 16: Lore &amp; Legends</div>
        <h1 className={styles.title}>Builds — Items por Campeón</h1>
        <p className={styles.subtitle}>
          Set 16 · Items recomendados por campeón con imágenes reales
        </p>
      </header>
      <div className={styles.wrapper}>
        <Suspense>
          <BuildTabs
            yordle={{ rows: yordle, legendItems }}
            noxus={{ rows: noxus, legendItems: noxusLegendItems }}
          />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
