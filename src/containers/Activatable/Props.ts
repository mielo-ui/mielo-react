import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export type ActivatableAccent = boolean | "warning" | "error" | "success"

export type ActivatableColor =
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

export interface ActivatableProps extends DivProps {
  accent?: ActivatableAccent
  color?: ActivatableColor
  children?: ReactNode
  active?: boolean
  hover?: boolean
}
