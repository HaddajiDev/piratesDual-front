import Image from "next/image"
import Link from "next/link"
import { DonateModal } from "@/components/donate-modal"

export function Footer() {
  return (
    <footer className="border-t border-[#FBBF24]/10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden border-2 border-[#FBBF24]/50 bg-[#FBBF24]">
                <Image src="/heads.png" alt="Pirate's Dual" fill className="object-contain p-0.5" />
              </div>
              <span className="text-lg font-bold tracking-tight uppercase">Pirate&apos;s Dual</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              A 2D pixel art turn-based pirate ship battle game. Outsmart your opponent, fire your cannons, and rule the seas.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24]">Navigate</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/community" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social / Steam */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24]">Play</h4>
            <div className="space-y-2">
              <a
                href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Image src="/steam.png" alt="Steam" width={16} height={16} />
                Play on Steam
              </a>
              <a
                href="https://www.instagram.com/piratesdual/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#FBBF24]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pirate&apos;s Dual. All rights reserved.
          </p>
          <DonateModal />
          <p className="text-xs text-muted-foreground">
            
          </p>
        </div>
      </div>
    </footer>
  )
}
