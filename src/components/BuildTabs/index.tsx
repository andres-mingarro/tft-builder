'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ChampionTable from '@/components/ChampionTable';
import ItemLegend from '@/components/ItemLegend';
import { TableRow } from '@/data/tabla';
import { Item } from '@/data/build';
import styles from './BuildTabs.module.scss';

interface BuildData {
  rows: TableRow[];
  legendItems: Item[];
}

interface BuildTabsProps {
  yordle: BuildData;
  noxus: BuildData;
}

export default function BuildTabs({ yordle, noxus }: BuildTabsProps) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get('tab') === 'noxus' ? 'noxus' : 'yordle';

  const current = active === 'yordle' ? yordle : noxus;

  function setTab(tab: 'yordle' | 'noxus') {
    router.replace(`/tabla?tab=${tab}`, { scroll: false });
  }

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${active === 'yordle' ? styles.activeYordle : ''}`}
          onClick={() => setTab('yordle')}
        >
          <span className={styles.tabIcon}>🐾</span>
          Yordle
        </button>
        <button
          className={`${styles.tab} ${active === 'noxus' ? styles.activeNoxus : ''}`}
          onClick={() => setTab('noxus')}
        >
          <span className={styles.tabIcon}>⚔️</span>
          Noxus
        </button>
      </div>

      <ChampionTable key={active} rows={current.rows} legendItems={current.legendItems} />
      <ItemLegend items={current.legendItems} />
    </>
  );
}
