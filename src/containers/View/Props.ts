import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export type ViewBg = "panel" | "windows" | "content" | "osd"

export interface ViewProps extends DivProps {
  accent?: CoreAccent
  color?: CoreColor | string

  // Background style
  activatable?: boolean
  bordered?: boolean
  bg?: ViewBg

  // Content
  scrollable?: boolean
  children?: ReactNode
}