import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bentley Adams',
  description: 'Bentley Adams Nig. Ltd',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
