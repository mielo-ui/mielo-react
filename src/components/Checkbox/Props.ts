import { ChangeEventHandler, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

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
  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

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