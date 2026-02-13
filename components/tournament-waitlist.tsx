"use client"

import { useState } from "react"

export function TournamentWaitlist() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("https://studio-core.piratesdual.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 pt-2">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-[#FBBF24] text-sm font-bold uppercase tracking-wider">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          You&apos;re on the list!
        </div>
        <p className="text-xs text-muted-foreground">We&apos;ll notify you when tournaments go live.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-[#FBBF24]/60 hover:text-[#FBBF24] transition-colors underline"
        >
          Add another email
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto pt-2">
      <input
        type="email"
        required
        maxLength={200}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === "error") setStatus("idle")
        }}
        placeholder="Enter your email..."
        className="w-full sm:flex-1 px-4 py-3 bg-[#0a0e17] border border-[#FBBF24]/30 text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors text-sm"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "sending" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 sm:absolute sm:-bottom-6 sm:left-0">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
