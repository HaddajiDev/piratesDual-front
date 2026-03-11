"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

const WALLET = "0xF60790fAe69B039614d6225049Cd8644F4F5db1A"
const API = "https://studio-core.piratesdual.com/api"

// ── Networks ──────────────────────────────────────────────────────────────────
const NETWORKS = {
  ethereum: {
    label: "Ethereum",
    chainId: "0x1",
    color: "#627EEA",
    icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    explorer: "https://etherscan.io/tx/",
    native: { symbol: "ETH", geckoId: "ethereum", decimals: 18, icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    params: null,
  },
  arbitrum: {
    label: "Arbitrum",
    chainId: "0xa4b1",
    color: "#28A0F0",
    icon: "https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg",
    explorer: "https://arbiscan.io/tx/",
    native: { symbol: "ETH", geckoId: "ethereum", decimals: 18, icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    params: {
      chainId: "0xa4b1", chainName: "Arbitrum One",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://arbiscan.io"],
    },
  },
  base: {
    label: "Base",
    chainId: "0x2105",
    color: "#0052FF",
    icon: "https://raw.githubusercontent.com/base-org/brand-kit/001c0e9b40a67799ebe0418671ac4e02a0c683ce/logo/in-product/Base_Network_Logo.svg",
    explorer: "https://basescan.org/tx/",
    native: { symbol: "ETH", geckoId: "ethereum", decimals: 18, icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    params: {
      chainId: "0x2105", chainName: "Base",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://mainnet.base.org"],
      blockExplorerUrls: ["https://basescan.org"],
    },
  },
  optimism: {
    label: "Optimism",
    chainId: "0xa",
    color: "#FF0420",
    icon: "https://assets.coingecko.com/coins/images/25244/small/Optimism.png",
    explorer: "https://optimistic.etherscan.io/tx/",
    native: { symbol: "ETH", geckoId: "ethereum", decimals: 18, icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    params: {
      chainId: "0xa", chainName: "OP Mainnet",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
    },
  },
  bnb: {
    label: "BNB Chain",
    chainId: "0x38",
    color: "#F3BA2F",
    icon: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
    explorer: "https://bscscan.com/tx/",
    native: { symbol: "BNB", geckoId: "binancecoin", decimals: 18, icon: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png" },
    params: {
      chainId: "0x38", chainName: "BNB Smart Chain",
      nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
      rpcUrls: ["https://bsc-dataseed.binance.org"],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  },
  sei: {
    label: "Sei",
    chainId: "0x531",
    color: "#E84142",
    icon: "https://assets.coingecko.com/coins/images/28205/small/Sei_Logo_-_Transparent.png",
    explorer: "https://seitrace.com/tx/",
    native: { symbol: "SEI", geckoId: "sei-network", decimals: 18, icon: "https://assets.coingecko.com/coins/images/28205/small/Sei_Logo_-_Transparent.png" },
    params: {
      chainId: "0x531", chainName: "Sei Network",
      nativeCurrency: { name: "SEI", symbol: "SEI", decimals: 18 },
      rpcUrls: ["https://evm-rpc.sei-apis.com"],
      blockExplorerUrls: ["https://seitrace.com"],
    },
  },
} as const

// ── Stablecoin addresses ───────────────────────────────────────────────────────
const STABLECOINS = {
  USDC: {
    label: "USDC",
    color: "#2775CA",
    icon: "/usdc.png",
    decimals: 6,
    address: {
      ethereum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      arbitrum: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      base:     "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      optimism: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      bnb:      "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      sei:      "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
    },
  },
  USDT: {
    label: "USDT",
    color: "#26A17B",
    icon: "/usdt.png",
    decimals: 6,
    address: {
      ethereum: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      arbitrum: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      base:     "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
      optimism: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      bnb:      "0x55d398326f99059fF775485246999027B3197955",
      sei:      "0xB75D0B03c06A926e488e2659DF1A861F860bD3d1",
    },
  },
} as const

type Network = keyof typeof NETWORKS
type StablecoinKey = keyof typeof STABLECOINS
// token is either a stablecoin key or "NATIVE"
type TokenKey = StablecoinKey | "NATIVE"
type Step = "idle" | "connecting" | "sending" | "success" | "error"

const USD_PRESETS = [1, 5, 10, 25]

// ── Helpers ───────────────────────────────────────────────────────────────────
function encodeTransfer(to: string, amountUnits: bigint): string {
  const selector = "a9059cbb"
  const paddedTo = to.toLowerCase().replace("0x", "").padStart(64, "0")
  const paddedAmount = amountUnits.toString(16).padStart(64, "0")
  return "0x" + selector + paddedTo + paddedAmount
}

function toHex(value: bigint): string {
  return "0x" + value.toString(16)
}

type EthProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
}
function getEthereum(): EthProvider | null {
  return (window as unknown as { ethereum?: EthProvider }).ethereum ?? null
}

function NetworkIcon({ src, size = 16 }: { src: string; size?: number }) {
  const [err, setErr] = useState(false)
  if (err) return <span className="rounded-full flex-shrink-0 inline-block bg-white/20" style={{ width: size, height: size }} />
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" width={size} height={size} className="rounded-full flex-shrink-0 object-cover" onError={() => setErr(true)} />
}

// ── Component ─────────────────────────────────────────────────────────────────
export function DonateModal() {
  const [open, setOpen]           = useState(false)
  const [mounted, setMounted]     = useState(false)
  const [network, setNetwork]     = useState<Network>("arbitrum")
  const [token, setToken]         = useState<TokenKey>("USDC")
  const [selectedUsd, setSelectedUsd] = useState<number>(5)
  const [customUsd, setCustomUsd] = useState("")
  const [anonymous, setAnonymous] = useState(false)
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [step, setStep]           = useState<Step>("idle")
  const [txHash, setTxHash]       = useState<string | null>(null)
  const [errorMsg, setErrorMsg]   = useState("")
  const [copied, setCopied]       = useState(false)
  // native coin prices keyed by geckoId
  const [prices, setPrices]       = useState<Record<string, number>>({})
  const [priceLoading, setPriceLoading] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open])

  // Fetch prices for all native coins when modal opens
  useEffect(() => {
    if (!open) return
    const geckoIds = [...new Set(Object.values(NETWORKS).map(n => n.native.geckoId))].join(",")
    setPriceLoading(true)
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds}&vs_currencies=usd`)
      .then(r => r.json())
      .then((data: Record<string, { usd: number }>) => {
        const map: Record<string, number> = {}
        for (const [id, val] of Object.entries(data)) map[id] = val.usd
        setPrices(map)
      })
      .catch(() => {/* silently fail — user can still enter amount */})
      .finally(() => setPriceLoading(false))
  }, [open])

  function copyAddress() {
    navigator.clipboard.writeText(WALLET)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function reset() {
    setStep("idle")
    setTxHash(null)
    setErrorMsg("")
  }

  const activeUsd = parseFloat(customUsd) > 0 ? parseFloat(customUsd) : selectedUsd
  const net = NETWORKS[network]
  const nativePrice = prices[net.native.geckoId] ?? 0
  // native amount needed to cover activeUsd
  const nativeAmount = nativePrice > 0 ? activeUsd / nativePrice : 0

  // label shown on the confirm bar
  const tokenLabel = token === "NATIVE" ? net.native.symbol : token

  async function sendDonation() {
    const eth = getEthereum()
    if (!eth) { setStep("error"); setErrorMsg("MetaMask not found. Install it at metamask.io/download"); return }

    setStep("connecting"); setErrorMsg("")
    try {
      const accounts = await eth.request({ method: "eth_requestAccounts" }) as string[]
      const from = accounts[0]

      try {
        await eth.request({ method: "wallet_switchEthereumChain", params: [{ chainId: net.chainId }] })
      } catch (switchErr: unknown) {
        if ((switchErr as { code?: number }).code === 4902 && net.params) {
          await eth.request({ method: "wallet_addEthereumChain", params: [net.params] })
        } else throw switchErr
      }

      setStep("sending")
      let hash: string

      if (token === "NATIVE") {
        // plain ETH/native send
        if (nativeAmount <= 0) throw new Error("Could not fetch price. Please try a stablecoin instead.")
        const weiAmount = BigInt(Math.round(nativeAmount * 1e18))
        hash = await eth.request({
          method: "eth_sendTransaction",
          params: [{ from, to: WALLET, value: toHex(weiAmount), gas: "0x5208" }],
        }) as string
      } else {
        // ERC-20 stablecoin
        const tok = STABLECOINS[token]
        const tokenUnits = BigInt(Math.round(activeUsd * 10 ** tok.decimals))
        const contractAddr = tok.address[network]
        const data = encodeTransfer(WALLET, tokenUnits)
        hash = await eth.request({
          method: "eth_sendTransaction",
          params: [{ from, to: contractAddr, data, gas: "0x186A0" }],
        }) as string
      }

      setTxHash(hash)
      setStep("success")

      await fetch(`${API}/donators`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: anonymous ? null : (donorName.trim() || null),
          email: anonymous ? null : (donorEmail.trim() || null),
          amount: activeUsd,
          token: tokenLabel,
          network,
          txHash: hash,
          walletAddress: from,
        }),
      }).catch(() => {})

    } catch (err: unknown) {
      setErrorMsg(
        (err as { code?: number }).code === 4001
          ? "Transaction cancelled."
          : ((err as { message?: string }).message ?? "Something went wrong.")
      )
      setStep("error")
    }
  }

  const modal = open ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

      <div className="relative z-10 w-full max-w-md border-2 border-[#FBBF24] bg-[#0a0e17] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FBBF24] pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FBBF24] pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FBBF24] pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FBBF24] pointer-events-none z-10" />

        <div className="overflow-y-auto p-8 space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Support <span className="gradient-text">Pirate&apos;s Dual</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Every donation helps us build a better game ⚓</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {step === "success" && txHash ? (
            <div className="space-y-4 text-center py-2">
              <div className="w-16 h-16 mx-auto bg-green-500/10 border-2 border-green-500/40 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="font-black uppercase text-lg text-green-400">Transaction Sent!</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Donated <strong className="text-foreground">
                    {token === "NATIVE"
                      ? `${nativeAmount.toFixed(6)} ${net.native.symbol} (~$${activeUsd})`
                      : `$${activeUsd} ${tokenLabel}`}
                  </strong> — thank you! 🏴‍☠️
                </p>
                {!anonymous && donorName && (
                  <p className="text-xs text-[#FBBF24] mt-1">You&apos;ll appear in our donors list as <strong>{donorName}</strong></p>
                )}
              </div>
              <div className="p-3 bg-card border border-green-500/20 text-left space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wide">Tx Hash</p>
                <code className="text-xs text-green-400 break-all block">{txHash}</code>
              </div>
              <a href={net.explorer + txHash} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] hover:underline">
                View on Explorer
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <button onClick={reset} className="block w-full text-xs text-muted-foreground hover:text-foreground transition-colors underline">
                Send another donation
              </button>
            </div>
          ) : (
            <>
              {/* ── Network ── */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Network</p>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(Object.keys(NETWORKS) as Network[]).map((n) => {
                    const active = network === n
                    return (
                      <button key={n} onClick={() => { setNetwork(n); setToken("USDC"); reset() }}
                        className="relative py-2.5 px-2 border transition-all flex flex-col items-center gap-1.5 group"
                        style={active
                          ? { borderColor: NETWORKS[n].color, backgroundColor: NETWORKS[n].color + "15" }
                          : { borderColor: "rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                        {active && (
                          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: NETWORKS[n].color }}>
                            <svg className="w-2 h-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        )}
                        <NetworkIcon src={NETWORKS[n].icon} size={20} />
                        <span className="text-[10px] font-bold uppercase tracking-wide truncate w-full text-center"
                          style={{ color: active ? NETWORKS[n].color : "rgba(255,255,255,0.4)" }}>
                          {NETWORKS[n].label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* ── Token ── */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Token</p>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {/* Native coin */}
                  {(() => {
                    const native = net.native
                    const price = prices[native.geckoId]
                    const active = token === "NATIVE"
                    return (
                      <button onClick={() => { setToken("NATIVE"); reset() }}
                        className="relative p-3 border transition-all flex flex-col items-center gap-2 group"
                        style={active
                          ? { borderColor: net.color, backgroundColor: net.color + "15" }
                          : { borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <NetworkIcon src={native.icon} size={24} />
                        <div className="text-center">
                          <p className="text-xs font-black uppercase" style={{ color: active ? net.color : "rgba(255,255,255,0.6)" }}>
                            {native.symbol}
                          </p>
                          <p className="text-[10px] mt-0.5" style={{ color: active ? net.color + "bb" : "rgba(255,255,255,0.25)" }}>
                            {priceLoading ? "loading..." : price ? `$${price.toLocaleString()}` : "—"}
                          </p>
                        </div>
                      </button>
                    )
                  })()}
                  {/* Stablecoins */}
                  {(Object.keys(STABLECOINS) as StablecoinKey[]).map((t) => {
                    const active = token === t
                    const color = STABLECOINS[t].color
                    return (
                      <button key={t} onClick={() => { setToken(t); reset() }}
                        className="relative p-3 border transition-all flex flex-col items-center gap-2"
                        style={active
                          ? { borderColor: color, backgroundColor: color + "15" }
                          : { borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <NetworkIcon src={STABLECOINS[t].icon} size={24} />
                        <div className="text-center">
                          <p className="text-xs font-black uppercase" style={{ color: active ? color : "rgba(255,255,255,0.6)" }}>
                            {STABLECOINS[t].label}
                          </p>
                          <p className="text-[10px] mt-0.5" style={{ color: active ? color + "bb" : "rgba(255,255,255,0.25)" }}>
                            ≈ $1.00
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* ── Amount ── */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Amount (USD)</p>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {USD_PRESETS.map((usd) => (
                    <button key={usd} onClick={() => { setSelectedUsd(usd); setCustomUsd("") }}
                      className="py-3 text-sm font-black border transition-all"
                      style={selectedUsd === usd && !customUsd
                        ? { borderColor: "#FBBF24", backgroundColor: "#FBBF2418", color: "#FBBF24" }
                        : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
                      ${usd}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-bold">$</span>
                  <input type="number" min="0.01" step="1" placeholder="Custom amount"
                    value={customUsd} onChange={(e) => setCustomUsd(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors"
                  />
                </div>
                {/* Confirm bar */}
                <div className="flex items-center justify-between gap-3 border border-[#FBBF24]/20 bg-[#FBBF24]/5 px-3 py-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Sending</span>
                    {token === "NATIVE" ? (
                      <strong className="text-[#FBBF24] text-sm">
                        {nativePrice > 0
                          ? `${nativeAmount.toFixed(6)} ${net.native.symbol}`
                          : `~$${activeUsd.toFixed(2)} ${net.native.symbol}`}
                      </strong>
                    ) : (
                      <strong className="text-[#FBBF24] text-sm">${activeUsd.toFixed(2)} {token}</strong>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-white/10 px-2 py-1 bg-white/5">
                    <NetworkIcon src={net.icon} size={12} />
                    <span>{net.label}</span>
                  </div>
                </div>
                {token === "NATIVE" && nativePrice > 0 && (
                  <p className="text-[10px] text-muted-foreground">
                    1 {net.native.symbol} = ${nativePrice.toLocaleString()} · price from CoinGecko
                  </p>
                )}
                {token === "NATIVE" && !priceLoading && nativePrice === 0 && (
                  <p className="text-[10px] text-amber-400">
                    Could not load {net.native.symbol} price. Consider using USDC or USDT instead.
                  </p>
                )}
              </div>

              {/* ── Identity ── */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Identity</p>
                  <div className="flex-1 h-px bg-white/5" />
                  <button onClick={() => setAnonymous(!anonymous)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${anonymous ? "bg-[#FBBF24]/30" : "bg-[#FBBF24]"}`}>
                    <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${anonymous ? "translate-x-0.5" : "translate-x-[18px]"}`} />
                  </button>
                </div>
                <div className={`flex items-start gap-2 px-3 py-2.5 border text-xs transition-all ${anonymous ? "border-[#FBBF24]/30 bg-[#FBBF24]/5 text-[#FBBF24]" : "border-border text-muted-foreground"}`}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  {anonymous ? "Donating anonymously — your name won't appear in the donors list." : "Your name will appear publicly in the donors list."}
                </div>
                {!anonymous && (
                  <div className="space-y-2">
                    <input type="text" placeholder="Your name (optional)" value={donorName}
                      onChange={(e) => setDonorName(e.target.value)} maxLength={100}
                      className="w-full px-3 py-2 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors" />
                    <input type="email" placeholder="Your email (optional, private)" value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)} maxLength={200}
                      className="w-full px-3 py-2 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-[#FBBF24] focus:outline-none transition-colors" />
                    <p className="text-[10px] text-muted-foreground">Email is never shown publicly — only used to contact you.</p>
                  </div>
                )}
              </div>

              {/* ── Copy wallet fallback ── */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Or copy wallet address</p>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="flex items-center gap-2 p-3 bg-card border border-[#FBBF24]/20">
                  <code className="flex-1 text-xs text-[#FBBF24] break-all font-mono">{WALLET}</code>
                  <button onClick={copyAddress} className="flex-shrink-0 p-1.5 hover:bg-[#FBBF24]/10 border border-[#FBBF24]/20 transition-colors">
                    {copied
                      ? <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" /></svg>
                      : <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg>
                    }
                  </button>
                </div>
                {copied && <p className="text-xs text-green-400 font-bold">Copied!</p>}
              </div>

              {step === "error" && errorMsg && (
                <p className="text-xs text-red-400 border border-red-400/20 bg-red-400/5 p-3">{errorMsg}</p>
              )}

              <button onClick={sendDonation}
                disabled={step === "connecting" || step === "sending" || activeUsd <= 0 || (token === "NATIVE" && priceLoading)}
                className="w-full flex items-center justify-center gap-3 py-4 font-black uppercase tracking-wider text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
                style={{ backgroundColor: "#059669", color: "#fff" }}>
                <Image src="/metamask.svg" alt="MetaMask" width={24} height={24} className="flex-shrink-0" />
                {step === "connecting" && "Connecting wallet..."}
                {step === "sending" && `Confirm in MetaMask...`}
                {(step === "idle" || step === "error") && (
                  token === "NATIVE"
                    ? `Donate ${nativeAmount > 0 ? nativeAmount.toFixed(6) : "~$" + activeUsd.toFixed(2)} ${net.native.symbol}`
                    : `Donate $${activeUsd.toFixed(2)} ${token} via MetaMask`
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-black transition-all animate-pulse hover:animate-none">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
        </svg>
        Donate
      </button>
      {mounted && createPortal(modal, document.body)}
    </>
  )
}
