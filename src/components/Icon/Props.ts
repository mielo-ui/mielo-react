import { ReactNode } from "react"

export type IconAccent = true | "success" | "warning" | "error"

export type IconSize =
  | "mini"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface IconProps {
  accent?: IconAccent
  size?: IconSize

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}
