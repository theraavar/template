import '../styles/globals.css'
import { MEDIEVAL_SHARP } from '../styles/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://website.com'
  },
  authors: [{ name: 'ruyla', url: 'https://github.com/ruyla' }],
  category: 'Category',
  colorScheme: 'light',
  creator: '',
  description: 'A single-page application built with Next13.',
  generator: 'Next.js',
  icons: {

  },
  keywords: ['HTML', 'CSS', 'JavaScript', 'JS', 'React', 'Next.js', 'Tailwind', 'TailwindCSS', 'MongoDB'],
  manifest: '',
  metadataBase: new URL('https://website.com'),
  openGraph: {
    title: 'Title',
    description: 'Description',
    url: 'https://website.com',
    siteName: 'Site Name',
    locale: 'en_US',
    type: 'website',
  },
  publisher: '',
  referrer: 'origin',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      "max-video-preview": -1
    }
  },
  themeColor: '#FFFFFF',
  title: {
    default: 'Title',
    template: '%s | Title'
  },
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={MEDIEVAL_SHARP.className}>
        {children}
      </body>
    </html>
  )
}