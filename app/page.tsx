import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      {/* Background decoration to tie in the pixel art yellow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#FBBF24]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FBBF24]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl">
        {/* Logo Section */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 shadow-2xl border-4 border-foreground bg-[#FBBF24]">
          <Image src="/heads.png" alt="Pirate's Dual Logo" fill className="object-contain p-2" priority />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-balance">Pirate's Dual</h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight text-muted-foreground uppercase italic">
            Coming Soon
          </p>
        </div>

        {/* Action Section */}
        <div className="pt-4">
          <Button
            size="lg"
            className="h-16 px-10 text-lg font-bold uppercase tracking-widest bg-[#FBBF24] text-black hover:bg-[#FBBF24]/90 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all active:translate-x-[2px] active:translate-y-[2px]"
            asChild
          >
            <a
              href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.54-.37 1.254-.603 1.961-.603.11 0 .219.01.325.027l2.842-4.1a3.332 3.332 0 0 1-.035-.487c0-1.841 1.492-3.333 3.333-3.333 1.841 0 3.333 1.492 3.333 3.333 0 1.841-1.492 3.333-3.333 3.333-.311 0-.606-.048-.885-.133l-4.212 2.928c.023.142.043.287.043.435 0 1.309-1.06 2.37-2.37 2.37-.893 0-1.666-.5-2.071-1.23L.262 14.04C1.514 19.684 6.305 24 12 24c6.627 0 12-5.373 12-12S18.627 0 11.979 0zM7.537 14.567c-.772 0-1.398.626-1.398 1.398 0 .772.626 1.398 1.398 1.398.772 0 1.398-.626 1.398-1.398 0-.772-.626-1.398-1.398-1.398zm9.313-4.733c0-.92-.746-1.667-1.667-1.667s-1.667.746-1.667 1.667.746 1.667 1.667 1.667 1.667-.746 1.667-1.667zm-1.667-.5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
              </svg>
              Wishlist on Steam
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
