import { FunctionComponent, HTMLAttributes, ReactNode } from "react"

import { DropdownContentProps } from "../../containers/Dropdown"
import { CoreAccent, CoreColor, CoreSize } from "../../types"
import { ListProps } from "../../containers/List"
import { LayoutProps } from "../../layout"
import { ItemProps } from "../Item"

type DivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "prefix" | "postfix" | "onChange"
>

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

  size?: false | CoreSize
  accent?: CoreAccent
}

export interface SelectHandles {}

export interface SelectProps extends DivProps, SelectCustomProps {
  options: OptionValue[]
  value?: OptionValue
  label?: string
  name: string

  className?: string

  transparent?: boolean
  bordered?: boolean
  disabled?: boolean
  opened?: boolean

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  customItem?: FunctionComponent<CustomItemProps>
  listProps?: SelectMenuListProps

  onChange: (option: OptionValue) => void
  onClose?: () => void
  onOpen?: () => void

  menuHeight?: number | string
}
