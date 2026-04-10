"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { DonateModal } from "@/components/donate-modal"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden border-2 border-[#FBBF24]/50 bg-[#FBBF24] group-hover:border-[#FBBF24] transition-colors">
              <Image src="/heads.png" alt="Pirate's Dual" fill className="object-contain p-0.5" />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase text-foreground group-hover:text-[#FBBF24] transition-colors">
              Pirate&apos;s Dual
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-[#FBBF24] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <DonateModal />
            <a
              href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#FBBF24]/90 transition-all border border-[#FBBF24]"
            >
              Play on Steam
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-[#FBBF24]/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-[#FBBF24] transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#FBBF24]/90 transition-all mt-2"
            >
              Play on Steam
            </a>
            <div className="flex justify-center mt-2">
              <DonateModal />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
