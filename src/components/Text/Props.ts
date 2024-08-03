import { ReactNode } from "react"

export type TextSize = "tiny" | "mini" | "small" | "large" | "big" | "massive"
export type TextAccent = boolean | "success" | "warning" | "error"

export interface TextProps {
  className?: string
  accent?: TextAccent
  size?: TextSize

  element?: "div" | "p" | "a"
  children?: ReactNode
  center?: boolean
}