import { ReactNode } from "react"

export type ProgressIndeterminate = "pulsating" | "filling" | "sliding" | "swinging"
export type ProgressAccent = boolean | "warning" | "error" | "success"
export type ProgressSize = "small" | "large"

export type ProgressColor =
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "brown"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"
  | "light"
  | "dark"

export interface ProgressProps {
  accent?: ProgressAccent
  color?: ProgressColor

  size?: ProgressSize
  className?: string

  multiple?: boolean
  children?: ReactNode
}

export interface ProgressBarProps {
  accent?: ProgressAccent
  color?: ProgressColor

  indeterminate?: ProgressIndeterminate
  className?: string

  progressVisible?: boolean
  transparent?: boolean

  children?: ReactNode
  progress?: number
}