import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type SidebarAccent = boolean | "warning" | "error" | "success"
export type SidebarSize = "small" | "large"

export interface SidebarProps extends DivProps {
  animateStyle?: "overlap" | "width" | "shift"

  accent?: SidebarAccent
  size?: SidebarSize
  className?: string

  headerbar?: ReactNode
  children?: ReactNode
  opened?: boolean
}
