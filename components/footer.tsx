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
                Wishlist on Steam
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
            Made with passion for pirates everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
