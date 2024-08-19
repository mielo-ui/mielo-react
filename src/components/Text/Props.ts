import { HTMLAttributes } from "react"
import { ReactNode } from "react"

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title" | "content">

export type TextSize = "tiny" | "mini" | "small" | "large" | "big" | "massive"
export type TextAccent = boolean | "success" | "warning" | "error"

export type TextColor =
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "brown"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"
  | "light"
  | "dark"

export interface TextProps extends DivProps {
  className?: string

  accent?: TextAccent
  color?: TextColor

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