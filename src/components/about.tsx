"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
      id="about"
      className="py-24 md:py-32 px-6 relative"
    >
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-6 block">
            About
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight text-balance">
            30 years of building products that connect people.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              CoFounder of{" "}
              <span className="text-foreground font-medium">Live Play Mobile</span>
              , a 100+ person company at the intersection of gaming, live
              entertainment, and broadcast television. Creator of{" "}
              <span className="text-foreground font-medium">Live Play Bingo</span>,
              network TV game show producer, and product veteran with three
              decades of experience building things people actually use.
            </p>
            <p>
              Based in Los Angeles. Obsessed with understanding what makes
              people tick—and building experiences that tap into that.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
