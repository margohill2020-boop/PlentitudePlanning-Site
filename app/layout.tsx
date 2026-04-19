import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plentitude Planning',
  description: 'Flat-fee financial planning for investing, taxes, retirement, real estate, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
