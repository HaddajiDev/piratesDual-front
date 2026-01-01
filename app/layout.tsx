import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Pirate's Dual - Coming Soon",
  description: "A thrilling pirate duel game. Wishlist on Steam now!",
  icons: {
    icon: [
      {
        url: "/heads.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/heads.png",
        media: "(prefers-color-scheme: dark)",
      },

    ],
    apple: "/heads.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
