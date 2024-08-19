import { HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export type ViewAccent = boolean | "warning" | "error" | "success"
export type ViewBg = "panel" | "windows" | "content" | "osd"

export interface ViewProps extends DivProps {
  accent?: ViewAccent

  // Background style
  activatable?: boolean
  bg?: ViewBg

  // Content
  scrollable?: boolean
  children?: ReactNode
}