import { ReactNode } from "react"

export type ProgressIndeterminate = "pulsating" | "filling" | "sliding" | "swinging"
export type ProgressAccent = boolean | "warning" | "error" | "success"
export type ProgressSize = "small" | "large"

export interface ProgressProps {
  accent?: ProgressAccent
  size?: ProgressSize
  className?: string

  multiple?: boolean
  children?: ReactNode
}

export interface ProgressBarProps {
  indeterminate?: ProgressIndeterminate
  accent?: ProgressAccent
  className?: string

  progressVisible?: boolean
  transparent?: boolean

  children?: ReactNode
  progress?: number
}