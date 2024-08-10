import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Yoga Studio - Find Your Balance',
  description:
    'Experience serenity and wellness with our expertly guided yoga classes. Explore our class offerings, meet our team, and join our community at our tranquil yoga studio.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
