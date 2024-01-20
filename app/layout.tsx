import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hein Htet Lu Lu',
  description: 'Web Developer',
  openGraph: {
    title: 'Hein Htet Lu Lu',
    description: 'Web Developer',
    url: `https://heinhtetlulu.vercel.app`,
    siteName: 'Hein Htet Lu Lu',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/light-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dark-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main id='swup' className='transition-fade'>
          {children}
        </main>
      </body>
    </html>
  )
}
