import styles from './SectionWrap.module.scss';

interface SectionWrapProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrap({ title, children }: SectionWrapProps) {
  return (
    <section className={styles.wrap}>
      <p className={styles.title}>{title}</p>
      {children}
    </section>
  );
}
