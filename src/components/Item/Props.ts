import { ReactNode, HTMLAttributes } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps<E = HTMLDivElement> = Omit<HTMLAttributes<E>, "title" | "content">

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

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  disableSidePropagation?: boolean
  className?: string

  tabIndex?: number
}