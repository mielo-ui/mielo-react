import { useState, useEffect, useRef, useCallback, ReactNode } from "react"
import { Tooltip } from "react-tooltip"
import isEqual from "lodash.isequal"
import clsx from "clsx"

import { Dropdown, DropdownContentProps, DropdownHandles } from "./Dropdown"
import { BasicMenu, OptionValue } from "./BasicMenu"
import { SelectButton } from "./LikeButton"

export interface SelectProps {
  options: OptionValue[]
  value?: OptionValue
  label?: string
  name: string

  size?: "small" | "large"
  disabled?: boolean
  compact?: boolean
  opened?: boolean

  accent?: "error" | "warning" | "success"
  messageIcon?: JSX.Element
  message?: ReactNode

  onChange: (option: OptionValue) => void
  onClose?: () => void
  onOpen?: () => void
}

export function Select({
  options,
  label,
  value,
  name,

  disabled,
  compact,
  opened,

  accent,
  messageIcon,
  message,

  onChange,
  onClose,
  onOpen,
  size,
}: SelectProps) {
  const dropdownRef = useRef<DropdownHandles>(null)

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

      return (
        <SelectButton {...buttonProps} />
      )
    },
    menu: (props: DropdownContentProps) => {
      const menuProps = {
        onSelect: onChange,
        options,
        ...props,
      }

      return (
        <BasicMenu {...menuProps} />
      )
    },

    className: {
      container: clsx("select", size, accent, {
        selected: !!value?.value,
        disabled,
        compact,
      }),
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

Select.displayName = "Adw.Select"
