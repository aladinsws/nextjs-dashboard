import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '%s | Acme dashboard',
  description: 'The official Next.js Course Dashboard , built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-aladinsws-projects.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
