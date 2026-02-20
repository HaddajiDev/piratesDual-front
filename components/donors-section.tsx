"use client"

import { useState, useEffect } from "react"

const API = "https://studio-core.piratesdual.com/api"

type Donor = {
  _id?: string
  name?: string | null
  email?: string | null
  amount: number
  token?: string
  createdAt?: string
}

export function DonorsSection() {
  const [donors, setDonors] = useState<Donor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/donators`)
      .then((r) => r.json())
      .then((data) => setDonors(Array.isArray(data) ? data : data.donors ?? []))
      .catch(() => setDonors([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-8 text-xs text-muted-foreground">
        <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    )
  }

  if (!donors.length) {
    return (
      <p className="text-center text-xs text-muted-foreground py-6">
        No donations yet — be the first to support us! ⚓
      </p>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {donors.map((donor, i) => (
        <div
          key={donor._id ?? i}
          className="group flex items-center gap-2 px-4 py-2.5 border border-[#FBBF24]/20 bg-[#FBBF24]/5 hover:border-[#FBBF24]/50 hover:bg-[#FBBF24]/10 transition-all"
          style={{
            animation: `fadeSlideIn 0.4s ease forwards`,
            animationDelay: `${i * 60}ms`,
            opacity: 0,
          }}
        >
          {/* Avatar initial */}
          <div className="w-7 h-7 bg-[#FBBF24]/20 border border-[#FBBF24]/30 flex items-center justify-center text-xs font-black text-[#FBBF24] uppercase flex-shrink-0">
            {donor.name ? donor.name[0] : "?"}
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-foreground leading-none">
              {donor.name ?? "Anonymous"}
            </p>
            <p className="text-[10px] text-[#FBBF24] mt-0.5">
              ${Number(donor.amount).toFixed(2)} {donor.token ?? ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
