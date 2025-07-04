// components/animated-counter.tsx
"use client"

import { useEffect, useState } from "react"
import { animate, useMotionValue } from "framer-motion"

export function AnimatedCounter({ to }: { to: number }) {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest))
      },
    })
    return () => controls.stop()
  }, [to])

  return <>{display}+</>
}
