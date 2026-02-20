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

// Deterministic color per name initial
const AVATAR_COLORS = [
  { bg: "#FBBF24", text: "#000" },
  { bg: "#7C3AED", text: "#fff" },
  { bg: "#059669", text: "#fff" },
  { bg: "#2563EB", text: "#fff" },
  { bg: "#DB2777", text: "#fff" },
  { bg: "#0891B2", text: "#fff" },
]

function getAvatarColor(name: string | null | undefined) {
  if (!name) return { bg: "#1e293b", text: "#94a3b8" }
  const code = name.charCodeAt(0) % AVATAR_COLORS.length
  return AVATAR_COLORS[code]
}

function getMedal(rank: number) {
  if (rank === 0) return { icon: "🥇", label: "Top Donor" }
  if (rank === 1) return { icon: "🥈", label: "2nd" }
  if (rank === 2) return { icon: "🥉", label: "3rd" }
  return null
}

export function DonorsSection() {
  const [donors, setDonors] = useState<Donor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/donators`)
      .then((r) => r.json())
      .then((data) => {
        const list: Donor[] = Array.isArray(data) ? data : data.donators ?? []
        // Sort by amount descending so top donors appear first
        list.sort((a, b) => Number(b.amount) - Number(a.amount))
        setDonors(list)
      })
      .catch(() => setDonors([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 bg-card border border-border animate-pulse" />
        ))}
      </div>
    )
  }

  if (!donors.length) {
    return (
      <div className="text-center py-12 space-y-3">
        <div className="text-4xl">⚓</div>
        <p className="text-sm text-muted-foreground">No donations yet — be the first to support us!</p>
      </div>
    )
  }

  // Top 3 get featured cards, rest get compact list
  const featured = donors.slice(0, 3)
  const rest = donors.slice(3)

  return (
    <div className="space-y-6">
      {/* Top 3 featured cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {featured.map((donor, i) => {
          const color = getAvatarColor(donor.name)
          const medal = getMedal(i)
          return (
            <div
              key={donor._id ?? i}
              className="relative group p-6 border bg-gradient-to-b from-card to-background overflow-hidden transition-all hover:-translate-y-0.5"
              style={{
                borderColor: i === 0 ? "#FBBF24" : i === 1 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                boxShadow: i === 0 ? "0 0 24px rgba(251,191,36,0.08)" : "none",
                animation: `fadeSlideIn 0.5s ease forwards`,
                animationDelay: `${i * 80}ms`,
                opacity: 0,
              }}
            >
              {/* Rank glow for #1 */}
              {i === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/5 to-transparent pointer-events-none" />
              )}

              {/* Medal */}
              {medal && (
                <div className="absolute top-3 right-3 text-lg" title={medal.label}>
                  {medal.icon}
                </div>
              )}

              <div className="relative z-10 space-y-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 flex items-center justify-center text-lg font-black uppercase"
                  style={{ backgroundColor: color.bg, color: color.text }}
                >
                  {donor.name ? donor.name[0] : "?"}
                </div>

                {/* Name */}
                <div>
                  <p className="font-black text-sm uppercase tracking-wide text-foreground truncate">
                    {donor.name ?? "Anonymous"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">Pirate Supporter</p>
                </div>

                {/* Amount */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xl font-black" style={{ color: i === 0 ? "#FBBF24" : "#f0f0f0" }}>
                    ${Number(donor.amount).toFixed(2)}
                  </p>
                  {donor.token && (
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{donor.token}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Rest of donors — compact horizontal list */}
      {rest.length > 0 && (
        <div className="border border-border bg-card/30 divide-y divide-border">
          {rest.map((donor, i) => {
            const color = getAvatarColor(donor.name)
            return (
              <div
                key={donor._id ?? (i + 3)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[#FBBF24]/5 transition-colors"
                style={{
                  animation: `fadeSlideIn 0.4s ease forwards`,
                  animationDelay: `${(i + 3) * 60}ms`,
                  opacity: 0,
                }}
              >
                <span className="text-xs text-muted-foreground w-5 text-right flex-shrink-0">#{i + 4}</span>
                <div
                  className="w-7 h-7 flex items-center justify-center text-xs font-black uppercase flex-shrink-0"
                  style={{ backgroundColor: color.bg, color: color.text }}
                >
                  {donor.name ? donor.name[0] : "?"}
                </div>
                <p className="text-sm font-bold text-foreground flex-1 truncate">
                  {donor.name ?? "Anonymous"}
                </p>
                <p className="text-sm font-black text-[#FBBF24] flex-shrink-0">
                  ${Number(donor.amount).toFixed(2)}
                  {donor.token && <span className="text-[10px] text-muted-foreground ml-1">{donor.token}</span>}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {/* Total */}
      <div className="flex items-center justify-between px-4 py-3 border border-[#FBBF24]/20 bg-[#FBBF24]/5">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Total raised by {donors.length} donor{donors.length !== 1 ? "s" : ""}
        </span>
        <span className="text-sm font-black text-[#FBBF24]">
          ${donors.reduce((sum, d) => sum + Number(d.amount), 0).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
