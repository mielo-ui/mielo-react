import { ReactNode, HTMLAttributes } from "react"

type DivProps<E = HTMLDivElement> = Omit<HTMLAttributes<E>, "title" | "content">
export type ItemAccent = boolean | "error" | "warning" | "success"
export type ItemSize = "small" | "large"

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

  inverted?: boolean
  vertical?: boolean
  center?: boolean

  accent?: ItemAccent
  size?: ItemSize

  disableSidePropagation?: boolean
  className?: string

  tabIndex?: number
}