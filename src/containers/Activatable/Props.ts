import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface ActivatableProps extends DivProps {
  accent?: CoreAccent
  color?: CoreColor | string

  children?: ReactNode
  active?: boolean
  hover?: boolean
}
