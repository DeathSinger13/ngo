"use client"

import { useEffect, useRef } from "react"

interface DashboardChartProps {
  type: "donations" | "volunteers" | "projects"
}

export function DashboardChart({ type }: DashboardChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Make canvas responsive
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const container = canvas.parentElement
      if (!container) return

      // Set canvas dimensions to match container
      canvas.width = container.clientWidth
      canvas.height = 300

      // Redraw chart
      drawChart()
    }

    // Initial resize
    resizeCanvas()

    // Add resize listener
    window.addEventListener("resize", resizeCanvas)

    function drawChart() {
      if (!canvasRef.current || !ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      // Set dimensions
      const width = canvasRef.current.width
      const height = canvasRef.current.height
      const padding = width < 400 ? 20 : 40
      const chartWidth = width - padding * 2
      const chartHeight = height - padding * 2

      // Generate data based on type
      let data: number[] = []
      const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      let color = ""
      let secondaryData: number[] = []
      let secondaryColor = ""

      switch (type) {
        case "donations":
          data = [12500, 15000, 14200, 18500, 22000, 25000]
          color = "rgba(124, 58, 237, 0.8)" // Purple for donations
          secondaryData = [10000, 12000, 11500, 14000, 16500, 19000]
          secondaryColor = "rgba(124, 58, 237, 0.3)"
          break
        case "volunteers":
          data = [250, 280, 310, 290, 320, 342]
          color = "rgba(16, 185, 129, 0.8)" // Green for volunteers
          break
        case "projects":
          data = [15, 18, 20, 19, 22, 24]
          color = "rgba(239, 68, 68, 0.8)" // Red for projects
          break
      }

      // Find max value for scaling
      const maxValue = Math.max(...data) * 1.1

      // Draw background grid
      ctx.beginPath()
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--background")
      ctx.fillRect(padding, padding, chartWidth, chartHeight)

      // Draw axes
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 1
      ctx.moveTo(padding, padding)
      ctx.lineTo(padding, height - padding)
      ctx.lineTo(width - padding, height - padding)
      ctx.stroke()

      // Draw grid lines
      const gridLines = width < 400 ? 3 : 5
      ctx.textAlign = "right"
      ctx.font = width < 400 ? "10px sans-serif" : "12px sans-serif"
      ctx.fillStyle = "#94a3b8"

      for (let i = 0; i <= gridLines; i++) {
        const y = padding + (chartHeight * i) / gridLines
        const value = Math.round(maxValue - (maxValue * i) / gridLines)

        ctx.beginPath()
        ctx.strokeStyle = "#e2e8f0"
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()

        ctx.fillText(value.toString(), padding - 10, y + 4)
      }

      // Draw x-axis labels
      ctx.textAlign = "center"
      const barWidth = chartWidth / labels.length

      // On small screens, show fewer labels
      const skipLabels = width < 400 ? 1 : 0

      labels.forEach((label, i) => {
        if (skipLabels && i % 2 !== 0 && i !== labels.length - 1) return

        const x = padding + barWidth * i + barWidth / 2
        ctx.fillText(label, x, height - padding + 20)
      })

      // Draw secondary data if available (for comparison)
      if (secondaryData.length > 0) {
        secondaryData.forEach((value, i) => {
          const x = padding + barWidth * i + barWidth * 0.1
          const barW = barWidth * 0.8
          const h = (value / maxValue) * chartHeight
          const y = height - padding - h

          // Bar
          ctx.fillStyle = secondaryColor
          ctx.beginPath()
          ctx.roundRect(x, y, barW, h, [4, 4, 0, 0])
          ctx.fill()
        })
      }

      // Draw primary data bars
      data.forEach((value, i) => {
        const x = padding + barWidth * i + barWidth * 0.1
        const barW = barWidth * 0.8
        const h = (value / maxValue) * chartHeight
        const y = height - padding - h

        // Bar gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, color.replace("0.8", "0.4"))

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(x, y, barW, h, [4, 4, 0, 0])
        ctx.fill()

        // Value on top of bar - only on larger screens or every other bar on small screens
        if (width >= 400 || i % 2 === 0) {
          ctx.fillStyle = "#64748b"
          ctx.textAlign = "center"

          let displayValue = value.toString()
          if (type === "donations") {
            displayValue = "$" + value / 1000 + "k"
          }

          // Smaller font on small screens
          ctx.font = width < 400 ? "10px sans-serif" : "12px sans-serif"
          ctx.fillText(displayValue, x + barW / 2, y - 10)
        }
      })

      // Draw legend if we have secondary data
      if (secondaryData.length > 0) {
        const legendY = padding / 2
        const legendX = width / 2

        // Current year
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.rect(legendX - 100, legendY - 5, 10, 10)
        ctx.fill()

        ctx.fillStyle = "#64748b"
        ctx.textAlign = "left"
        ctx.font = "12px sans-serif"
        ctx.fillText("Current Year", legendX - 85, legendY + 4)

        // Previous year
        ctx.fillStyle = secondaryColor
        ctx.beginPath()
        ctx.rect(legendX + 20, legendY - 5, 10, 10)
        ctx.fill()

        ctx.fillStyle = "#64748b"
        ctx.fillText("Previous Year", legendX + 35, legendY + 4)
      }
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [type])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

