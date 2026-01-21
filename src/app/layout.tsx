import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Perpendicular Carousel - Infinite Scroll POC',
  description: 'A modern infinite scroll carousel with perpendicular scrolling, built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
