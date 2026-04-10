"use client"

import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    customSubject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  const subjectOptions = [
    "General Inquiry",
    "Artist Application",
    "Tournament Info",
    "Bug Report",
    "Partnership",
    "Other",
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError("")

    const subject = formData.subject === "Other" ? formData.customSubject : formData.subject

    try {
      const res = await fetch("https://studio-core.piratesdual.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject,
          message: formData.message,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/30">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a question, want to join the community, or just want to say ahoy?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 bg-card border-2 border-[#FBBF24]/30 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[#FBBF24]/10 border border-[#FBBF24]/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold uppercase">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", subject: "General Inquiry", customSubject: "", message: "" })
                    }}
                    className="px-6 py-2 text-sm font-bold uppercase tracking-wider border border-[#FBBF24]/50 text-[#FBBF24] hover:bg-[#FBBF24]/10 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors"
                        placeholder="Captain Jack..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={200}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors"
                        placeholder="captain@ship.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-[#FBBF24] focus:outline-none transition-colors"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {formData.subject === "Other" && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Your Subject
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={200}
                        value={formData.customSubject}
                        onChange={(e) => setFormData({ ...formData, customSubject: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      maxLength={5000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formData.message.length}/5000
                    </p>
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 bg-card border border-border space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">Quick Info</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-[#FBBF24] mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase">Email</h4>
                      <p className="text-sm text-muted-foreground">piratesdual@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#FBBF24] mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase">Response Time</h4>
                      <p className="text-sm text-muted-foreground">Usually within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-card border border-border space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-tight">Follow the Game</h3>
                <a
                  href="https://store.steampowered.com/app/4214220/Pirates_Dual/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-background border border-border hover:border-[#FBBF24]/30 transition-all"
                >
                  <Image src="/steam.png" alt="Steam" width={24} height={24} />
                  <div>
                    <p className="text-sm font-bold uppercase">Steam</p>
                    <p className="text-xs text-muted-foreground">Play & follow</p>
                  </div>
                </a>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#FBBF24]/10 to-card border border-[#FBBF24]/20 space-y-3">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#FBBF24]">
                  Want to Join as an Artist?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Head over to our artist community platform to apply, submit art, and join tournaments!
                </p>
                <a
                  href="https://art.piratesdual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider bg-[#FBBF24] text-black hover:bg-[#f59e0b] transition-all"
                >
                  Visit art.piratesdual.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
