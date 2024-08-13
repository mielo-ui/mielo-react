import { HTMLAttributes, ReactNode } from "react"

export type HeaderSize = "tiny" | "small" | "small" | "large" | "big" | "huge"
type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title">

export interface HeaderProps extends DivProps {
  icon?: JSX.Element
  subtitle?: ReactNode
  title?: ReactNode

  className?: string
  size?: HeaderSize

  iconSided?: boolean
  flattened?: boolean
  inverted?: boolean
  center?: boolean
}
