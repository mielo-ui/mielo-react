import { FunctionComponent, HTMLAttributes, ReactNode } from "react"
import { DropdownContentProps } from "../../containers/Dropdown"
import { ItemProps } from "../Item"
import { ListProps } from "../../containers/List"
import { LayoutProps } from "../../layout"

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "prefix" | "postfix" | "onChange"
>

export type SelectAccent = boolean | "error" | "warning" | "success"
export type SelectSize = "small" | "large"

export type SelectButtonAccent = boolean | "warning" | "error" | "success"
export type SelectButtonSize = "small" | "large"

export type SelectColor =
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

export type SelectMenuListProps = LayoutProps<ListProps> &
  React.RefAttributes<HTMLDivElement>

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

export interface SelectMenuProps extends DropdownContentProps {
  selected?: OptionValue
  options: OptionValue[]

  customItem?: FunctionComponent<CustomItemProps>
  onSelect(option: OptionValue): void
  listProps?: SelectMenuListProps
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
  color?: SelectColor
  size?: SelectSize

  customItem?: FunctionComponent<CustomItemProps>
  listProps?: SelectMenuListProps

  onChange: (option: OptionValue) => void
  onClose?: () => void
  onOpen?: () => void

  menuHeight?: number | string
}
