import { FunctionComponent, HTMLAttributes, ReactNode } from "react"
import { DropdownContentProps } from "../../containers/Dropdown"
import { ItemProps } from "../Item"

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "prefix" | "postfix" | "onChange"
>

export type SelectAccent = boolean | "error" | "warning" | "success"
export type SelectSize = "small" | "large"

export type SelectButtonAccent = boolean | "warning" | "error" | "success"
export type SelectButtonSize = "small" | "large"

export interface OptionValue
  extends Omit<
    ItemProps<HTMLDivElement>,
    "onClick" | "disableSidePropagation" | "link"
  > {
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

  customItem?: FunctionComponent<CustomItemProps>
  onSelect(option: OptionValue): void
}

export interface SelectCustomProps {
  postfix?: ReactNode
  prefix?: ReactNode
}

export interface SelectButtonProps extends SelectCustomProps, DropdownContentProps {
  selected?: OptionValue
  label?: string
  name?: string

  accent?: SelectButtonAccent
  size?: SelectButtonSize
}

export interface SelectHandles {}

export interface SelectProps extends DivProps, SelectCustomProps {
  options: OptionValue[]
  value?: OptionValue
  label?: string
  name: string

  className?: string

  transparent?: boolean
  disabled?: boolean
  opened?: boolean

  accent?: SelectAccent
  size?: SelectSize

  customItem?: FunctionComponent<CustomItemProps>

  onChange: (option: OptionValue) => void
  onClose?: () => void
  onOpen?: () => void
}
