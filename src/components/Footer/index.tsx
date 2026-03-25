import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} Footer`}>
      <p>TFT Set 16: Lore &amp; Legends · Yordle 8 Reroll Build Guide</p>
      <p>
        Imágenes:{' '}
        <a href="https://raw.communitydragon.org" className={styles.link}>Community Dragon</a>
        {' · '}
        <a href="https://ddragon.leagueoflegends.com" className={styles.link}>Data Dragon (Riot)</a>
      </p>
      <p>
        Datos de meta:{' '}
        <a href="https://tftacademy.com" className={styles.link}>TFT Academy</a>
      </p>
    </footer>
  );
}
