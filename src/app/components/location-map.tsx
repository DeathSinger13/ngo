"use client"

import { useEffect, useRef } from "react"

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const ctx = document.createElement("canvas").getContext("2d")
    if (!ctx) return

    const mapCanvas = document.createElement("canvas")
    mapCanvas.width = mapRef.current.clientWidth
    mapCanvas.height = 400
    mapRef.current.appendChild(mapCanvas)

    const mapCtx = mapCanvas.getContext("2d")
    if (!mapCtx) return

    // Get theme from document
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Draw map background
    mapCtx.fillStyle = isDarkMode ? "#1e293b" : "#e2e8f0"
    mapCtx.fillRect(0, 0, mapCanvas.width, mapCanvas.height)

    // Draw roads
    mapCtx.strokeStyle = isDarkMode ? "#475569" : "#cbd5e1"
    mapCtx.lineWidth = 8

    // Horizontal roads
    for (let i = 1; i < 5; i++) {
      const y = i * (mapCanvas.height / 5)
      mapCtx.beginPath()
      mapCtx.moveTo(0, y)
      mapCtx.lineTo(mapCanvas.width, y)
      mapCtx.stroke()
    }

    // Vertical roads
    for (let i = 1; i < 8; i++) {
      const x = i * (mapCanvas.width / 8)
      mapCtx.beginPath()
      mapCtx.moveTo(x, 0)
      mapCtx.lineTo(x, mapCanvas.height)
      mapCtx.stroke()
    }

    // Draw buildings
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * mapCanvas.width
      const y = Math.random() * mapCanvas.height
      const size = 10 + Math.random() * 20

      mapCtx.fillStyle = isDarkMode ? "#64748b" : "#94a3b8"
      mapCtx.fillRect(x, y, size, size)
    }

    // Draw parks
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * mapCanvas.width
      const y = Math.random() * mapCanvas.height
      const size = 30 + Math.random() * 50

      mapCtx.fillStyle = isDarkMode ? "#166534" : "#86efac"
      mapCtx.beginPath()
      mapCtx.ellipse(x, y, size, size * 0.7, 0, 0, Math.PI * 2)
      mapCtx.fill()
    }

    // Draw water
    mapCtx.fillStyle = isDarkMode ? "#1e40af" : "#93c5fd"
    mapCtx.beginPath()
    mapCtx.moveTo(0, mapCanvas.height * 0.7)
    mapCtx.lineTo(mapCanvas.width * 0.3, mapCanvas.height * 0.8)
    mapCtx.lineTo(mapCanvas.width * 0.5, mapCanvas.height * 0.75)
    mapCtx.lineTo(mapCanvas.width * 0.7, mapCanvas.height * 0.85)
    mapCtx.lineTo(mapCanvas.width, mapCanvas.height * 0.8)
    mapCtx.lineTo(mapCanvas.width, mapCanvas.height)
    mapCtx.lineTo(0, mapCanvas.height)
    mapCtx.closePath()
    mapCtx.fill()

    // Draw location marker
    const markerX = mapCanvas.width * 0.6
    const markerY = mapCanvas.height * 0.4

    // Shadow
    mapCtx.fillStyle = "rgba(0, 0, 0, 0.2)"
    mapCtx.beginPath()
    mapCtx.arc(markerX, markerY + 2, 12, 0, Math.PI * 2)
    mapCtx.fill()

    // Get primary color from CSS variable
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary")
    const primaryHsl = `hsl(${primaryColor})`

    // Pin
    mapCtx.fillStyle = primaryHsl
    mapCtx.beginPath()
    mapCtx.arc(markerX, markerY, 10, 0, Math.PI * 2)
    mapCtx.fill()

    mapCtx.fillStyle = "white"
    mapCtx.beginPath()
    mapCtx.arc(markerX, markerY, 5, 0, Math.PI * 2)
    mapCtx.fill()

    // Pulse animation
    let alpha = 1
    let radius = 10
    let growing = false

    const animate = () => {
      if (growing) {
        radius += 0.5
        alpha -= 0.02
        if (radius >= 30) {
          growing = false
        }
      } else {
        radius = 10
        alpha = 1
        growing = true
      }

      // Clear only the area around the marker
      mapCtx.clearRect(markerX - 35, markerY - 35, 70, 70)

      // Redraw the background for that area (simplified)
      mapCtx.fillStyle = isDarkMode ? "#1e293b" : "#e2e8f0"
      mapCtx.fillRect(markerX - 35, markerY - 35, 70, 70)

      // Draw pulse
      if (growing) {
        mapCtx.fillStyle = `${primaryHsl.replace(")", `, ${alpha})`)}`
        mapCtx.beginPath()
        mapCtx.arc(markerX, markerY, radius, 0, Math.PI * 2)
        mapCtx.fill()
      }

      // Redraw pin
      mapCtx.fillStyle = primaryHsl
      mapCtx.beginPath()
      mapCtx.arc(markerX, markerY, 10, 0, Math.PI * 2)
      mapCtx.fill()

      mapCtx.fillStyle = "white"
      mapCtx.beginPath()
      mapCtx.arc(markerX, markerY, 5, 0, Math.PI * 2)
      mapCtx.fill()

      requestAnimationFrame(animate)
    }

    animate()

    // Add "HopeWorks HQ" label
    mapCtx.font = "bold 14px sans-serif"
    mapCtx.fillStyle = isDarkMode ? "#e2e8f0" : "#1e293b"
    mapCtx.textAlign = "center"
    mapCtx.fillText("HopeWorks HQ", markerX, markerY - 20)

    // Handle theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && mutation.target === document.documentElement) {
          // Redraw map when theme changes
          if (mapRef.current && mapCanvas.parentNode === mapRef.current) {
            mapRef.current.removeChild(mapCanvas)
          }
          // Re-initialize map
          if (mapRef.current) {
            mapRef.current.innerHTML = ""
            mapCanvas.width = mapRef.current.clientWidth
            mapRef.current.appendChild(mapCanvas)
          }
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
      if (mapRef.current && mapCanvas.parentNode === mapRef.current) {
        mapRef.current.removeChild(mapCanvas)
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] bg-muted rounded-lg overflow-hidden"
      aria-label="Map showing the location of HopeWorks headquarters at 123 Hope Street, New York, NY 10001"
    />
  )
}

