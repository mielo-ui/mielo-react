import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface SidebarProps extends DivProps {
  animateStyle?: "overlap" | "width" | "shift"

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string

  headerbar?: ReactNode
  children?: ReactNode
  opened?: boolean
}
