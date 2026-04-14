"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create abstract light particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 30 + 35, // Gold/amber range
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(18, 18, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const scrollToWork = () => {
    document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToConnect = () => {
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6 text-balance">
          Geremie Camara
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-12 text-balance">
          Building things that move people.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToWork}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
          >
            My Work
          </Button>
          <Button
            onClick={scrollToConnect}
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-medium"
          >
            Connect
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  )
}
