import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type ViewAccent = boolean | "warning" | "error" | "success"
export type ViewBg = "panel" | "window" | "content" | "osd"

export interface ViewProps extends DivProps {
  accent?: ViewAccent

  // Background style
  activatable?: boolean
  bg?: ViewBg

  // Content
  scrollable?: boolean
  children?: ReactNode
}