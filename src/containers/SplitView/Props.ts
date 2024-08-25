import { MouseEventHandler, HTMLAttributes, ReactNode } from "react"

import { CoreAccent, CoreColor } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface SplitViewProps extends DivProps {
  accent?: CoreAccent
  color?: CoreColor | string

  contentClassName?: string
  className?: string

  headerbar?: ReactNode
  children?: ReactNode
  sidebar?: ReactNode

  overlay?: MouseEventHandler<HTMLDivElement>
}
