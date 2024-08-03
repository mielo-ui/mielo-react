import { forwardRef, useRef } from "react"
import clsx from "clsx"

import {
  DropdownContentProps,
  DropdownHandles,
  Dropdown,
} from "../../containers/Dropdown"

import { SelectButton } from "./SelectButton"
import { BasicMenu } from "./BasicMenu"
import { SelectProps } from "./Props"

export const Select = forwardRef<any, SelectProps>(function Select(
  {
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
  },
  ref,
) {
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
})

Select.displayName = "Mie.Select"