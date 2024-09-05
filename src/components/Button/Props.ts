import { ButtonHTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string

  children?: ReactNode
  label?: ReactNode
  link?: string

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

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
