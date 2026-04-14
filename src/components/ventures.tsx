"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Gamepad2, Tv, Bot, Building2, Film, Clapperboard } from "lucide-react"

const ventures = [
  {
    name: "Live Play Mobile",
    description: "Live entertainment gaming platform with 100+ employees",
    icon: Building2,
    href: "#",
  },
  {
    name: "Live Play Bingo",
    description: "Interactive mobile bingo with live hosts and real prizes",
    icon: Gamepad2,
    href: "#",
  },
  {
    name: "AI Hosts",
    description: "Next-generation AI-powered live entertainment hosts",
    icon: Bot,
    href: "https://liveplayhosts.com",
  },
  {
    name: "Live Play Casino Platform",
    description: "Full-scale live casino gaming infrastructure",
    icon: Tv,
    href: "#",
  },
  {
    name: "Sony Pictures Television",
    description: "Television production and entertainment partnerships",
    icon: Film,
    href: "#",
  },
  {
    name: "Paramount Pictures",
    description: "Film and television production collaborations",
    icon: Clapperboard,
    href: "#",
  },
]

export function Ventures() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="py-24 md:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-6 block">
            Ventures
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-12 text-balance">
            Companies & Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((venture, index) => (
            <Card
              key={venture.name}
              className={`group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-8">
                <a
                  href={venture.href}
                  target={venture.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    venture.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <venture.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {venture.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
