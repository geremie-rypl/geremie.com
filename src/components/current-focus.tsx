"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Users, Brain } from "lucide-react"

const focusAreas = [
  {
    icon: Sparkles,
    title: "AI-Powered Live Entertainment",
    description:
      "Pioneering the next generation of interactive experiences where artificial intelligence meets real human connection.",
  },
  {
    icon: Users,
    title: "Workforce Innovation",
    description:
      "Rethinking how teams collaborate and create in an age of distributed work and emerging technologies.",
  },
  {
    icon: Brain,
    title: "Behavioral Intelligence",
    description:
      "Understanding human motivation at scale to build products that genuinely resonate and retain.",
  },
]

export function CurrentFocus() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="focus"
      className="py-24 md:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-6 block">
            Current Focus
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Where I&apos;m Spending My Time
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <area.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
