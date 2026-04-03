import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Pirate's Dual",
  description: "Learn about Pirate's Dual, a 2D pixel art turn-based pirate ship battle game.",
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover.png"
            alt="About Pirate's Dual"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
            About the Game
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The Story Behind <span className="gradient-text">Pirate&apos;s Dual</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Born from a love of strategy games and pirate lore, Pirate&apos;s Dual brings
            epic turn-based ship battles to the high seas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pirate&apos;s Dual was born from the idea that turn-based games should be fast,
                strategic, and full of personality. We wanted to create a game where
                every match tells a different story - where cunning pirates outwit each
                other with clever cannon shots and daring strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Set in a vibrant pirate world, the game combines deep strategic gameplay
                with charming 2D pixel art aesthetics. Every ship, every wave, and
                every battlefield has been crafted with care to deliver an unforgettable
                dueling experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re a casual player looking for quick fun or a competitive
                gamer seeking to climb the ranks, Pirate&apos;s Dual has something for everyone.
              </p>
            </div>
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4]">
              <div className="absolute inset-0 border-2 border-[#FBBF24]/20 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full border-2 border-[#FBBF24]/40 overflow-hidden">
                <Image
                  src="/vertical-cover.png"
                  alt="Pirate's Dual characters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Game <span className="gradient-text">Pillars</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The core principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strategy First",
                desc: "Every mechanic is designed to reward smart play and creative thinking.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
              },
              {
                title: "Fair Play",
                desc: "No pay-to-win mechanics. Skill and strategy determine the winner, not your wallet.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                ),
              },
              {
                title: "Community",
                desc: "Built with players in mind. Your feedback shapes the future of the game.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                title: "Artistry",
                desc: "Every pixel is placed with purpose. We believe games are art, and art matters.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <div key={i} className="p-6 bg-card border border-border hover:border-[#FBBF24]/30 transition-all group">
                <div className="text-[#FBBF24] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Be Part of the <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground">
            Play now on Steam and join the battle on the high seas.
          </p>
          <a
            href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all hover:scale-105 border-2 border-[#FBBF24]"
          >
            <Image src="/steam.png" alt="Steam" width={24} height={24} className="invert" />
            Play on Steam
          </a>
        </div>
      </section>
    </main>
  )
}
