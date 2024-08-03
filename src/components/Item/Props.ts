import { ReactNode, MouseEvent } from "react"

type OnClick = (
  event: MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLLIElement>,
) => void

export type ItemAccent = boolean | "error" | "warning" | "success"
export type ItemSize = "small" | "large"

export interface ItemProps {
  onClick?: OnClick

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