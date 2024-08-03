import { ReactNode } from "react"

import { DropdownContentProps } from "../../containers/Dropdown"

export type SelectAccent = boolean | "error" | "warning" | "success"
export type SelectSize = "small" | "large"

export type SelectButtonAccent = boolean | "warning" | "error" | "success"
export type SelectButtonSize = "small" | "large"

export interface OptionValue {
  label: string
  value: any
}

export interface CustomItemProps {
  option: OptionValue
  isSelected: boolean

  onSelect(option: OptionValue): void
}

export interface BasicMenuProps extends DropdownContentProps {
  selected?: OptionValue
  options: OptionValue[]

  customItem?: (props: CustomItemProps) => ReactNode
  onSelect(option: OptionValue): void
}

export interface SelectButtonProps extends DropdownContentProps {
  selected?: OptionValue
  label?: string
  name?: string

  accent?: SelectButtonAccent
  size?: SelectButtonSize

  messageIcon?: JSX.Element
  message?: ReactNode
}

export interface SelectProps {
  options: OptionValue[]
  value?: OptionValue
  label?: string
  name: string

  className?: string
  disabled?: boolean
  compact?: boolean
  opened?: boolean

  accent?: SelectAccent
  size?: SelectSize

  messageIcon?: JSX.Element
  message?: ReactNode

  onChange: (option: OptionValue) => void
  onClose?: () => void
  onOpen?: () => void
}
