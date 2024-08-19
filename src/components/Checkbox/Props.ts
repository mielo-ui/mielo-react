import { ChangeEventHandler, ReactNode } from "react"

export type CheckboxAccent = boolean | "warning" | "error" | "success"
export type CheckboxSize = "large" | "small"

export type CheckboxColor =
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

export interface CheckboxIndicatorIcon {
  indicator?: {
    unchecked?: ReactNode
    checked?: ReactNode
  }
  layout?: {
    unchecked?: ReactNode
    checked?: ReactNode
  }
}

export interface LayoutIconProps {
  unchecked?: ReactNode
  checked?: ReactNode
}

export interface CheckboxProps {
  accent?: CheckboxAccent
  color?: CheckboxColor

  size?: CheckboxSize
  className?: string

  icon?: CheckboxIndicatorIcon
  circular?: boolean
  toggle?: boolean

  children?: string | ReactNode
  label?: string | ReactNode

  disabled?: boolean
  checked?: boolean
  name?: string

  onChange?: ChangeEventHandler<HTMLInputElement>
}