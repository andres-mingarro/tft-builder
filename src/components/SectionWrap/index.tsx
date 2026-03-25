import styles from './SectionWrap.module.scss';

interface SectionWrapProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrap({ title, children, className }: SectionWrapProps) {
  return (
    <section className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <p className={styles.title}>{title}</p>
      {children}
    </section>
  );
}
