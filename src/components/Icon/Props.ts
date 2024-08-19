import { HTMLAttributes, ReactNode } from "react"
type DivProps = HTMLAttributes<HTMLDivElement>

export type IconAccent = true | "success" | "warning" | "error"

export type IconSize =
  | "mini"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export type IconColor =
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

export interface IconProps extends DivProps {
  accent?: IconAccent
  color?: IconColor
  size?: IconSize

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}
