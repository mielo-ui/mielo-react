import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  className?: string

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  transparent?: boolean
  container?: boolean
  circular?: boolean
  bordered?: boolean
  src?: string
}
