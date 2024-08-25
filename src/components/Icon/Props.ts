import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface IconProps extends DivProps {
  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}
