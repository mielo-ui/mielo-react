import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonAccent = boolean | "success" | "warning" | "error"
export type ButtonSize = "tiny" | "small" | "medium" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string

  children?: ReactNode
  label?: ReactNode

  accent?: ButtonAccent
  size?: ButtonSize

  iconLabeled?: boolean
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