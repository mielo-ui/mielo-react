import { ReactNode, HTMLAttributes } from "react"

type DivProps<E = HTMLDivElement> = Omit<HTMLAttributes<E>, "title" | "content">
export type ItemAccent = boolean | "error" | "warning" | "success"
export type ItemSize = "small" | "large"

export type ItemColor =
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

export interface ItemProps<E> extends DivProps<E> {
  description?: ReactNode
  content?: ReactNode
  title?: ReactNode
  link?: string

  icon?: ReactNode
  side?: ReactNode
  label?: ReactNode

  activatable?: boolean
  active?: boolean
  hover?: boolean

  inverted?: boolean
  vertical?: boolean
  center?: boolean

  accent?: ItemAccent
  color?: ItemColor
  size?: ItemSize

  disableSidePropagation?: boolean
  className?: string

  tabIndex?: number
}