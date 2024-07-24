import { useRef, ReactNode } from "react"
import clsx from "clsx"

import { Dropdown, DropdownContentProps, DropdownHandles } from "./Dropdown"
import { BasicMenu, OptionValue } from "./BasicMenu"
import { SelectButton } from "./SelectButton"

export type SelectAccent = boolean | "error" | "warning" | "success"
export type SelectSize = "small" | "large"

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

export function Select({
  className: _className,
  options,
  label,
  value,
  name,

  disabled,
  compact,
  opened,

  messageIcon,
  message,
  accent,

  onChange,
  onClose,
  onOpen,
  size,
}: SelectProps) {
  const dropdownRef = useRef<DropdownHandles>(null)

  const accentClassName = accent && (accent === true ? "accent" : accent)

  const dropdownProps = {
    ref: dropdownRef,

    onClose: onClose,
    onOpen: onOpen,
    opened,

    content: (props: DropdownContentProps) => {
      const buttonProps = {
        messageIcon,
        message,
        accent,

        selected: value,
        label,
        size,
        name,

        ...props,
      }

      return <SelectButton {...buttonProps} />
    },
    menu: (props: DropdownContentProps) => {
      const menuProps = {
        onSelect: onChange,
        options,
        ...props,
      }

      return <BasicMenu {...menuProps} />
    },

    className: {
      container: clsx(
        "select",
        accentClassName,
        size,
        {
          selected: !!value?.value,
          disabled,
          compact,
        },
        _className,
      ),
    },

    props: {
      container: {
        "data-name": name,
      },
      content: {
        "data-selected": !!value?.value,
      },
      menu: {
        // @TODO
      },
    },
  }

  return <Dropdown {...dropdownProps} />
}

Select.displayName = "Mie.Select"