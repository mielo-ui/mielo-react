import { ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

export type ProgressIndeterminate = "pulsating" | "filling" | "sliding" | "swinging"

export interface ProgressProps {
  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string

  multiple?: boolean
  children?: ReactNode
}

export interface ProgressBarProps {
  accent?: CoreAccent
  color?: CoreColor | string

  indeterminate?: ProgressIndeterminate
  className?: string

  progressVisible?: boolean
  transparent?: boolean

  children?: ReactNode
  progress?: number
}