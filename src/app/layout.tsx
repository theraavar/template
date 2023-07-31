import '../styles/globals.css'
import { MEDIEVAL_SHARP } from '../styles/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  authors: [{ name: 'ruyla', url: 'https://github.com/ruyla' }],
  description: 'A single-page application build with Next13.',
  keywords: ['HTML', 'CSS', 'JavaScript', 'JS', 'React', 'Next.js', 'Tailwind', 'TailwindCSS'],
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
  title: {
    default: 'Title',
    template: '%s | Title'
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
