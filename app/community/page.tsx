import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community - Pirate's Dual",
  description: "Join the Pirate's Dual artist community. Participate in tournaments, win prizes, and get your art featured in the game.",
}

export default function CommunityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover_2.png"
            alt="Community"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
            Community
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Join the <span className="gradient-text">Crew</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you&apos;re an artist, a gamer, or both - there&apos;s a place for you
            in the Pirate&apos;s Dual community. Create, compete, and connect.
          </p>
        </div>
      </section>

      {/* Artist Call-to-Action */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden border-2 border-[#FBBF24]/30 bg-gradient-to-br from-[#FBBF24]/5 via-card to-card p-8 md:p-16">
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FBBF24]/50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#FBBF24]/50" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  Are You an <span className="gradient-text">Artist</span>?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We&apos;re looking for talented artists to join our creative community.
                  If you have a passion for pixel art, character design, or illustration,
                  we want to hear from you!
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our community is a space where artists can share their work, get feedback,
                  collaborate on projects, and contribute directly to the world of
                  Pirate&apos;s Dual. Your art could end up as official game content!
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Pixel Art", "Character Design", "UI Design", "Illustration", "Animation", "Concept Art"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://art.piratesdual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all"
                >
                  Apply to Join
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4]">
                <div className="relative w-full h-full border-2 border-[#FBBF24]/30 overflow-hidden glow-gold">
                  <Image
                    src="/vertical-cover.png"
                    alt="Artist community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
              Compete & Win
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Art <span className="gradient-text">Tournaments</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcase your talent in our regular art tournaments. Compete against fellow
              artists for amazing prizes and the chance to have your work featured in the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Submit Your Art",
                desc: "Create original pirate-themed artwork and submit it during the tournament period. All skill levels are welcome!",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Community Votes",
                desc: "The community votes on their favorite submissions. Engage with other artists and support your fellow creators.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h.096a.75.75 0 01.75.75v8.5a.75.75 0 01-.096.375z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Win Prizes",
                desc: "Top entries win prizes including cash rewards, exclusive in-game items, and the honor of having your art in the game.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-card border border-border hover:border-[#FBBF24]/30 transition-all group">
                <div className="absolute top-4 right-4 text-4xl font-black text-[#FBBF24]/10 group-hover:text-[#FBBF24]/20 transition-colors">
                  {item.step}
                </div>
                <div className="text-[#FBBF24] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              What You Can <span className="gradient-text">Win</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                place: "1st Place",
                color: "from-[#FBBF24] to-[#f59e0b]",
                borderColor: "border-[#FBBF24]",
                prizes: [
                  "Your art featured in the game",
                  "Cash prize",
                  "Exclusive in-game title",
                  "Artist spotlight feature",
                ],
              },
              {
                place: "2nd Place",
                color: "from-gray-300 to-gray-400",
                borderColor: "border-gray-400",
                prizes: [
                  "Cash prize",
                  "Exclusive in-game items",
                  "Community recognition",
                  "Portfolio showcase",
                ],
              },
              {
                place: "3rd Place",
                color: "from-amber-700 to-amber-800",
                borderColor: "border-amber-700",
                prizes: [
                  "Cash prize",
                  "In-game item pack",
                  "Community badge",
                  "Feedback from dev team",
                ],
              },
            ].map((tier, i) => (
              <div key={i} className={`p-8 bg-card border-2 ${tier.borderColor}/30 hover:${tier.borderColor} transition-all`}>
                <div className={`inline-block px-4 py-2 text-sm font-black uppercase tracking-wider bg-gradient-to-r ${tier.color} text-black mb-6`}>
                  {tier.place}
                </div>
                <ul className="space-y-3">
                  {tier.prizes.map((prize, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#FBBF24] flex-shrink-0" />
                      {prize}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Why Join <span className="gradient-text">Our Community</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Collaborate", desc: "Work with other artists and the dev team on exciting projects." },
              { title: "Learn & Grow", desc: "Get feedback from experienced artists and improve your skills." },
              { title: "Get Recognized", desc: "Build your portfolio with game art that thousands will see." },
              { title: "Early Access", desc: "Be the first to see new content and provide input on designs." },
              { title: "Exclusive Events", desc: "Access to art jams, workshops, and community meetups." },
              { title: "Shape the Game", desc: "Your ideas and art can directly influence the game's direction." },
            ].map((benefit, i) => (
              <div key={i} className="p-6 border border-border hover:border-[#FBBF24]/30 transition-all">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-[#FBBF24]">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Ready to <span className="gradient-text">Create</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you&apos;re a seasoned artist or just starting out, we&apos;d love to have you
            on board. Get in touch and become part of the Pirate&apos;s Dual family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://art.piratesdual.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all hover:scale-105"
            >
              Join the Artist Community
            </a>
            <a
              href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-[#FBBF24]/50 text-[#FBBF24] hover:bg-[#FBBF24]/10 transition-all hover:scale-105"
            >
              Wishlist on Steam
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
