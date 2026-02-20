import Image from "next/image"
import Link from "next/link"
import { TournamentWaitlist } from "@/components/tournament-waitlist"
import { DonorsSection } from "@/components/donors-section"

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover_2.png"
            alt="Pirate's Dual"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/70 via-[#0a0e17]/50 to-[#0a0e17]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          {/* Logo */}
          <div className="animate-float inline-block">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-[#FBBF24] bg-[#FBBF24] shadow-2xl">
              <Image src="/heads.png" alt="Pirate's Dual Logo" fill className="object-contain p-2" priority />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
            <span className="gradient-text">Pirate&apos;s</span>{" "}
            <span className="text-foreground">Dual</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 2D pixel art turn-based pirate ship battle game. Outsmart your opponent,
            aim your cannons, and sink their ship before they sink yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all border-2 border-[#FBBF24] hover:scale-105"
            >
              <Image src="/steam.png" alt="Steam" width={24} height={24} className="invert" />
              Wishlist on Steam
            </a>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-[#FBBF24]/50 text-[#FBBF24] hover:bg-[#FBBF24]/10 transition-all hover:scale-105"
            >
              Join the Crew
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-[#FBBF24]/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#FBBF24] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== GAME FEATURES SECTION ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Why <span className="gradient-text">Pirate&apos;s Dual</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every duel is a battle of wits. Aim carefully and conquer the seas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Fast-Paced Duels",
                desc: "Quick turn-based rounds that keep the adrenaline pumping. Every shot matters, every decision counts.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: "Multiplayer Mayhem",
                desc: "Challenge friends or face off against pirates from around the world in intense ship battles.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "Unique Art Style",
                desc: "Beautiful pixel art meets charming pirate aesthetics. Every ship, every wave is a work of art.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-card border border-border hover:border-[#FBBF24]/30 transition-all hover:glow-gold"
              >
                <div className="text-[#FBBF24] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GAME SHOWCASE ===== */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Set Sail for <span className="gradient-text">Adventure</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pirate&apos;s Dual is a 2D pixel art game where two pirate ships face off in
                epic turn-based battles on the high seas. Aim your cannons, plan your strategy,
                and sink your opponent to claim victory and treasure.
              </p>
              <ul className="space-y-3">
                {[
                  "Turn-based ship-to-ship combat",
                  "Unique pirate ships with special abilities",
                  "Competitive ranked matchmaking",
                  "Beautiful 2D pixel art graphics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#FBBF24] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all"
              >
                Learn More on Steam
              </a>
            </div>
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] overflow-hidden border-2 border-[#FBBF24]/20 glow-gold">
              <Image
                src="/vertical-cover.png"
                alt="Pirate's Dual Gameplay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GAME TOURNAMENT SECTION ===== */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBBF24]/5 via-transparent to-[#FBBF24]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBBF24]/5 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-5xl mx-auto">
          <div className="relative border-2 border-[#FBBF24] bg-gradient-to-br from-[#0a0e17] via-[#111827] to-[#0a0e17] p-8 md:p-16 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#FBBF24]" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#FBBF24]" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#FBBF24]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#FBBF24]" />

            {/* Diagonal stripes decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <div className="w-full h-full" style={{ background: "repeating-linear-gradient(45deg, #FBBF24, #FBBF24 2px, transparent 2px, transparent 20px)" }} />
            </div>

            <div className="relative z-10 text-center space-y-8">
              {/* Coming Soon badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#FBBF24] text-black animate-pulse">
                <span className="w-2 h-2 bg-black rounded-full" />
                Coming Soon
              </div>

              {/* Trophy icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#FBBF24] bg-[#FBBF24]/10 flex items-center justify-center">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" />
                  </svg>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Game <span className="gradient-text">Tournaments</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Compete against the best pirates on the seas and win real money prizes.
                Prove your skills in intense ship battles and climb the tournament ranks.
              </p>

              {/* Prize highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
                <div className="p-6 border border-[#FBBF24]/30 bg-[#FBBF24]/5">
                  <div className="text-3xl md:text-4xl font-black text-[#FBBF24]">$$$</div>
                  <p className="text-sm text-muted-foreground mt-2 uppercase font-bold tracking-wide">Cash Prizes</p>
                </div>
                <div className="p-6 border border-[#FBBF24]/30 bg-[#FBBF24]/5">
                  <div className="text-3xl md:text-4xl font-black text-[#FBBF24]">1v1</div>
                  <p className="text-sm text-muted-foreground mt-2 uppercase font-bold tracking-wide">Competitive Duels</p>
                </div>
                <div className="p-6 border border-[#FBBF24]/30 bg-[#FBBF24]/5">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#FBBF24] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <p className="text-sm text-muted-foreground mt-2 uppercase font-bold tracking-wide">Global Rankings</p>
                </div>
              </div>

              {/* Waitlist signup */}
              <div className="pt-4 space-y-4">
                <p className="text-sm text-[#FBBF24] font-bold uppercase tracking-wider">
                  Join the waitlist — be first to compete
                </p>
                <div className="relative">
                  <TournamentWaitlist />
                </div>
                <p className="text-xs text-muted-foreground">
                  Tournament platform is under construction — we&apos;ll notify you when it launches!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTIST COMMUNITY SECTION ===== */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-[#FBBF24]/5 to-purple-900/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FBBF24]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-purple-500/20 to-[#FBBF24]/20 text-[#FBBF24] border border-[#FBBF24]/30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
              Calling All Artists
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Join Our <span className="gradient-text">Creative Crew</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your talent can shape the world of Pirate&apos;s Dual. Join our artist community
              and leave your mark on the game.
            </p>
          </div>

          <div className="relative border-2 border-purple-500/30 bg-gradient-to-br from-[#0a0e17] via-purple-950/20 to-[#0a0e17] p-8 md:p-12 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-3 border-l-3 border-[#FBBF24]" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-3 border-r-3 border-[#FBBF24]" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-3 border-l-3 border-[#FBBF24]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-3 border-r-3 border-[#FBBF24]" />

            {/* Diagonal shimmer */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{ background: "repeating-linear-gradient(-45deg, #FBBF24, #FBBF24 1px, transparent 1px, transparent 30px)" }} />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Are you an artist? We welcome talented creators to contribute art,
                  participate in design tournaments, and win amazing prizes.
                  Your art could become part of the game!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🎨", label: "Art Tournaments", desc: "Compete with other artists" },
                    { icon: "💰", label: "Win Prizes", desc: "Cash rewards & in-game items" },
                    { icon: "⭐", label: "Get Featured", desc: "Your art in the game" },
                    { icon: "🤝", label: "Community", desc: "Connect with fellow artists" },
                  ].map((item, i) => (
                    <div key={i} className="group p-4 bg-purple-950/30 border border-purple-500/20 hover:border-[#FBBF24]/40 transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{item.icon}</span>
                        <h4 className="text-sm font-bold uppercase text-[#FBBF24]">{item.label}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://art.piratesdual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all hover:scale-105"
                >
                  Join the Community
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] group">
                <div className="absolute -inset-2 border-2 border-[#FBBF24]/10 group-hover:border-[#FBBF24]/30 transition-colors" />
                <div className="absolute -inset-4 border border-purple-500/10 group-hover:border-purple-500/20 transition-colors" />
                <Image
                  src="/vertical-cover.png"
                  alt="Join our creative community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DONORS SECTION ===== */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBBF24]/3 via-transparent to-[#FBBF24]/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FBBF24]/3 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FBBF24] border border-[#FBBF24]/30 bg-[#FBBF24]/5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Hall of Donors
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Our <span className="gradient-text">Legendary</span> Supporters
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These pirates believed in Pirate&apos;s Dual before anyone else.
              Their support makes this game possible.
            </p>
          </div>

          <DonorsSection />
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Ready to <span className="gradient-text">Duel</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wishlist Pirate&apos;s Dual on Steam and be the first to know when the game launches.
            Join thousands of pirates waiting to set sail.
          </p>
          <a
            href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all hover:scale-105 border-2 border-[#FBBF24]"
          >
            <Image src="/steam.png" alt="Steam" width={28} height={28} className="invert" />
            Wishlist on Steam Now
          </a>
        </div>
      </section>
    </main>
  )
}
