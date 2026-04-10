import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Geist_Mono, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: {
    default: "Pirate's Dual - 2D Pixel Art Ship Battle Game",
    template: "%s | Pirate's Dual",
  },
  description: "A thrilling 2D pixel art turn-based pirate ship battle game. Outsmart your opponent, fire your cannons, and rule the seas. Play on Steam now!",
  keywords: [
    "pirate game",
    "pirate's dual",
    "pixel art game",
    "turn-based game",
    "ship battle game",
    "indie game",
    "steam game",
    "2D game",
    "multiplayer pirate",
    "strategy game",
  ],
  authors: [{ name: "Haddaji Dev" }],
  creator: "Haddaji Dev",
  publisher: "Haddaji Dev",
  metadataBase: new URL("https://piratesdual.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://piratesdual.com",
    siteName: "Pirate's Dual",
    title: "Pirate's Dual - 2D Pixel Art Ship Battle Game",
    description: "A thrilling 2D pixel art turn-based pirate ship battle game. Outsmart your opponent, fire your cannons, and rule the seas. Play on Steam now!",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Pirate's Dual - 2D Pixel Art Ship Battle Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirate's Dual - 2D Pixel Art Ship Battle Game",
    description: "A thrilling 2D pixel art turn-based pirate ship battle game. Outsmart your opponent, fire your cannons, and rule the seas.",
    images: ["/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/heads.png", media: "(prefers-color-scheme: light)" },
      { url: "/heads.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/heads.png",
    shortcut: "/heads.png",
  },
  category: "gaming",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
