import { ReactNode } from "react"
import { CoreAccent, CoreColor } from "../../types"

export interface HeaderBarProps {
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string
  transparent?: boolean
  bordered?: boolean

  header?: ReactNode
  right?: ReactNode
  left?: ReactNode

  controls?: ReactNode
}