import Header from '@/components/Header';
import TraitsSection from '@/components/TraitsSection';
import ChampionsSection from '@/components/ChampionsSection';
import CarryItemsSection from '@/components/CarryItemsSection';
import ItemGallery from '@/components/ItemGallery';
import AugmentsSection from '@/components/AugmentsSection';
import TipsSection from '@/components/TipsSection';
import Footer from '@/components/Footer';
import { traits, champions, carryBuilds, galleryItems, augments, tips } from '@/data/build';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainGrid}>
        <TraitsSection traits={traits} />
        <ChampionsSection champions={champions} />
        <CarryItemsSection carries={carryBuilds} />
        <ItemGallery items={galleryItems} />
        <AugmentsSection augments={augments} />
        <TipsSection tips={tips} />
      </main>
      <Footer />
    </>
  );
}
