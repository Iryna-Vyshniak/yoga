import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { ThemeProvider } from '@/components/common/ThemeProvider';
import Header from '@/layout/header/Header';
import { cn } from '@/lib/utils';
import meta from '@/shared/data/meta.json';

import './globals.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const { title, description, keywords, authors } = meta;

export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body
        className={cn(
          'remove-scrollbar text-slate-950 dark:via-slate-950 relative flex flex-col bg-light bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] bg-cover bg-no-repeat font-sans antialiased dark:bg-dark-300 dark:to-dark-200 dark:text-white',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          enableColorScheme={true}
        >
          <Header />
          <main className='grow'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
