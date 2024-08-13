import { HTMLAttributes } from "react"
import { ReactNode } from "react"

export type TextSize = "tiny" | "mini" | "small" | "large" | "big" | "massive"
export type TextAccent = boolean | "success" | "warning" | "error"

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title" | "content">

export interface TextProps extends DivProps {
  className?: string
  accent?: TextAccent
  size?: TextSize

  muted?: boolean
  invert?: boolean

  semibold?: boolean
  regular?: boolean
  light?: boolean
  bold?: boolean

  element?: "div" | "p" | "a"
  children?: ReactNode
  center?: boolean
}