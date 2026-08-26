import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { headers } from 'next/headers';
import { DocumentDirSync } from '@/components/DocumentDirSync';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title: 'إديوغيت إكسبو 2026 | المعرض الوطني للمدارس',
  description:
    'الخيارات التعليمية تحت سقف واحد. المعرض الأول الشامل للمدارس والمعاهد.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get('x-next-locale') || 'ar') as 'en' | 'ar';
  const isRtl = locale === 'ar';
  const lang = locale === 'ar' ? 'ar' : 'en';

  return (
    <html
      lang={lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen bg-white antialiased font-sans">
        <DocumentDirSync />
        {children}
      </body>
    </html>
  );
}
