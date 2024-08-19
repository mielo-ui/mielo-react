import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonAccent = boolean | "success" | "warning" | "error"

export type ButtonColor =
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

export type ButtonSize =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string

  children?: ReactNode
  label?: ReactNode

  accent?: ButtonAccent
  color?: ButtonColor
  size?: ButtonSize

  icon?: ReactNode

  transparent?: boolean
  circular?: boolean
  tertiary?: boolean
  filled?: boolean
  center?: boolean
  pilled?: boolean

  active?: boolean
  hover?: boolean
}

export interface ButtonGroupProps {
  children?: ReactNode
  className?: string
}
