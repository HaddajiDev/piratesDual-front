"use client"

import { useEffect, useState } from "react"

const RELEASE_DATE = new Date("2026-03-19T12:00:00Z")

function getTimeLeft() {
  const now = new Date()
  const diff = RELEASE_DATE.getTime() - now.getTime()
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute -inset-1 bg-[#FBBF24]/20 blur-md rounded-sm" />
        {/* Main box */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-b from-[#1a1f2e] to-[#0a0e17] border-2 border-[#FBBF24]/60 flex items-center justify-center overflow-hidden">
          {/* Shine effect */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
          {/* Divider line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#FBBF24]/20" />
          <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#FBBF24] tabular-nums tracking-tighter">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  )
}

export function ReleaseCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Past release date — don't render the section
  if (mounted && timeLeft === null) return null

  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden bg-[#0a0e17]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBBF24]/5 via-transparent to-[#FBBF24]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FBBF24]/8 blur-3xl rounded-full" />
      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: "repeating-linear-gradient(45deg, #FBBF24, #FBBF24 1px, transparent 1px, transparent 40px)" }} />

      <div className="relative max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#FBBF24] text-black">
            <span className="w-2 h-2 bg-black rounded-full animate-ping" />
            Release Countdown
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Launching <span className="gradient-text">March 19</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            The seas await. Prepare your cannons — the battle begins soon.
          </p>
        </div>

        {/* Countdown boxes */}
        {!mounted ? (
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {["Days", "Hours", "Mins", "Secs"].map((l) => (
              <div key={l} className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#1a1f2e] border-2 border-[#FBBF24]/60 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">{l}</span>
              </div>
            ))}
          </div>
        ) : timeLeft ? (
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FBBF24]/60 pb-5 sm:pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FBBF24]/60 pb-5 sm:pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <div className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FBBF24]/60 pb-5 sm:pb-6 animate-pulse">:</div>
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>
        ) : null}

        {/* Release date label */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#FBBF24]/40" />
          <div className="flex items-center gap-2 text-sm text-[#FBBF24]/70 font-bold uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            March 19, 2026
          </div>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#FBBF24]/40" />
        </div>

        {/* CTA */}
        <a
          href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-black transition-all hover:scale-105"
        >
          Play Now on Steam
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
