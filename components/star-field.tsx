"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Star properties
    const stars: Array<{ x: number; y: number; size: number; speed: number }> = []
    const numStars = 200
    const fallingStars: Array<{ x: number; y: number; size: number; speed: number }> = []

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.2,
      })
    }

    // Create falling star
    const createFallingStar = () => {
      if (Math.random() < 0.05 && fallingStars.length < 5) {
        fallingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          size: 2 + Math.random() * 2,
          speed: 2 + Math.random() * 4,
        })
      }
    }

    // Animation
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.y = (star.y + star.speed) % canvas.height
      })

      // Draw falling stars
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      fallingStars.forEach((star, index) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.y += star.speed
        star.x += star.speed / 2 // slight horizontal movement

        if (star.y > canvas.height) {
          fallingStars.splice(index, 1)
        }
      })

      createFallingStar()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

