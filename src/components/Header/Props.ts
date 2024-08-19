import { HTMLAttributes, ReactNode } from "react"

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title">

export type HeaderSize = "tiny" | "small" | "small" | "large" | "big" | "huge"
export type HeaderAccent = boolean | "warning" | "error" | "success"

export type HeaderColor =
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

export interface HeaderProps extends DivProps {
  icon?: JSX.Element
  subtitle?: ReactNode
  title?: ReactNode

  accent?: HeaderAccent
  color?: HeaderColor

  className?: string
  size?: HeaderSize

  iconSided?: boolean
  flattened?: boolean
  inverted?: boolean
  center?: boolean
}
