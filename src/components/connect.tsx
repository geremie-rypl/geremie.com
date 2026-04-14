"use client"

import { useEffect, useRef, useState } from "react"
import { Mail } from "lucide-react"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Connect() {
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
    <section ref={sectionRef} id="connect" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-6 block">
            Connect
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Let&apos;s Talk
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Always open to interesting conversations.
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/geremie/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-foreground font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:hello@geremie.com"
              className="group flex items-center gap-3 px-6 py-4 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              aria-label="Send an email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-foreground font-medium">Email</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-12 border-t border-border/30 text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Geremie Camara. Los Angeles, CA.
          </p>
        </div>
      </div>
    </section>
  )
}
