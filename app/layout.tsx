import type { Metadata } from 'next'
import { Ysabeau_SC } from 'next/font/google'
import './globals.css'

const Ysabeau = Ysabeau_SC({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medium Premium',
  description: 'Generated by create next app',
  applicationName:"Medium Premium",
  icons:"/favicon.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Ysabeau.className}>{children}</body>
    </html>
  )
}
