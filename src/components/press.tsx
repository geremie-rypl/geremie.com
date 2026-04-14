"use client"

import { useEffect, useRef, useState } from "react"

const pressLogos = [
  { name: "TechCrunch", width: "w-28" },
  { name: "Forbes", width: "w-24" },
  { name: "Variety", width: "w-24" },
  { name: "The Hollywood Reporter", width: "w-36" },
  { name: "Deadline", width: "w-24" },
  { name: "VentureBeat", width: "w-28" },
  { name: "GamesBeat", width: "w-28" },
  { name: "Billboard", width: "w-24" },
]

export function Press() {
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
    <section ref={sectionRef} id="press" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            As Seen In
          </span>
        </div>

        {/* Horizontal scrolling logos */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className={`flex-shrink-0 ${logo.width} h-16 mx-8 flex items-center justify-center`}
              >
                <div className="px-6 py-3 border border-border/30 rounded-lg bg-secondary/20 hover:border-primary/30 transition-colors">
                  <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
