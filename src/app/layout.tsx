import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'TFT Set 16 — Guía Yordle Build',
  description: 'Guía de build Yordle 8 Reroll para TFT Set 16: Lore & Legends',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
