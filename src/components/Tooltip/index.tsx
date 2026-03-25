'use client';
import { useState, useRef } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  function show() {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setCoords({ x: r.left + r.width / 2, y: r.top });
  }

  return (
    <div ref={ref} className={styles.anchor} onMouseEnter={show} onMouseLeave={() => setCoords(null)}>
      {children}
      {coords && (
        <div className={styles.box} style={{ left: coords.x, top: coords.y }}>
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
}
