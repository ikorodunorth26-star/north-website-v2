"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  useGrouping?: boolean
}

function formatTicker(latest: number, decimalPlaces: number, useGrouping: boolean) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    useGrouping,
  }).format(Number(latest.toFixed(decimalPlaces)))
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  useGrouping = true,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const settledValue = direction === "down" ? startValue : value

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) {
        ref.current.textContent = formatTicker(settledValue, decimalPlaces, useGrouping)
      }
      return
    }

    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue, reduceMotion, decimalPlaces, useGrouping, settledValue])

  useEffect(() => {
    if (reduceMotion) return

    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatTicker(latest, decimalPlaces, useGrouping)
      }
    })
  }, [springValue, decimalPlaces, useGrouping, reduceMotion])

  return (
    <span
      ref={ref}
      className={cn("inline-block tracking-wider text-black tabular-nums dark:text-white", className)}
      {...props}
    >
      {formatTicker(reduceMotion ? settledValue : direction === "down" ? value : startValue, decimalPlaces, useGrouping)}
    </span>
  )
}
