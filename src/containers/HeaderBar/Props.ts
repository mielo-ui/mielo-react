import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface HeaderBarProps extends DivProps {
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string
  transparent?: boolean
  bordered?: boolean

  header?: ReactNode
  right?: ReactNode
  left?: ReactNode

  controls?: ReactNode

  // For tauri & electron window drag
  "data-desktop-drag"?: boolean
}