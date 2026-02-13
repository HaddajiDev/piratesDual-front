import Image from "next/image"
import Link from "next/link"

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

      {/* ===== ARTIST COMMUNITY SECTION ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden border-2 border-[#FBBF24]/30 bg-gradient-to-br from-card via-card to-[#FBBF24]/5 p-8 md:p-16">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FBBF24]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FBBF24]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
                  For Artists
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  Join Our <span className="gradient-text">Creative Crew</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Are you an artist? Join the Pirate&apos;s Dual community! We welcome
                  talented creators to contribute art, participate in design tournaments,
                  and win amazing prizes. Your art could become part of the game!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Art Tournaments", desc: "Compete with other artists" },
                    { label: "Win Prizes", desc: "Cash rewards & in-game items" },
                    { label: "Get Featured", desc: "Your art in the game" },
                    { label: "Community", desc: "Connect with fellow artists" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-background/50 border border-border">
                      <h4 className="text-sm font-bold uppercase text-[#FBBF24]">{item.label}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://art.piratesdual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all"
                >
                  Join the Community
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4]">
                <div className="absolute inset-4 border-2 border-[#FBBF24]/20" />
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
