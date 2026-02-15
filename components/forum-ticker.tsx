"use client"

import { useEffect, useState } from "react"
import { Hash } from "lucide-react"

interface Forum {
  id: string
  name: string
  question_count: number
}

const extraForums: Forum[] = [
  { id: "extra-vercel", name: "Vercel", question_count: 3 },
  { id: "extra-perplexity", name: "Perplexity", question_count: 2 },
  { id: "extra-browserbase", name: "Browserbase", question_count: 1 },
  { id: "extra-cursor", name: "Cursor", question_count: 4 },
  { id: "extra-cloudflare", name: "Cloudflare", question_count: 2 },
  { id: "extra-cerebras", name: "Cerebras", question_count: 3 },
]

export function ForumTicker() {
  const [forums, setForums] = useState<Forum[]>([])

  useEffect(() => {
    fetch("/api/forums")
      .then((r) => r.json())
      .then((fetched: Forum[]) => setForums([...fetched, ...extraForums]))
      .catch(console.error)
  }, [])

  if (forums.length === 0) return null

  // Repeat enough times to fill wide screens and allow seamless looping
  const repeats = Math.max(4, Math.ceil(40 / forums.length))
  const items = Array.from({ length: repeats }, () => forums).flat()

  return (
    <div className="relative z-30 border-b border-border/30 bg-background/60 backdrop-blur-sm overflow-hidden">
      <div className="scrolling-text flex items-center gap-10 py-2 whitespace-nowrap">
        {items.map((forum, i) => (
          <span key={`${forum.id}-${i}`} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70">
            <Hash className="h-2.5 w-2.5 text-primary/40" />
            <span>h/{forum.name.toLowerCase()}</span>
            <span className="font-mono text-[10px] opacity-40">{forum.question_count}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
