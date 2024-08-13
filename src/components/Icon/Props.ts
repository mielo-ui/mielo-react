import { HTMLAttributes, ReactNode } from "react"

export type IconAccent = true | "success" | "warning" | "error"
type DivProps = HTMLAttributes<HTMLDivElement>

export type IconSize =
  | "mini"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface IconProps extends DivProps {
  accent?: IconAccent
  size?: IconSize

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}
