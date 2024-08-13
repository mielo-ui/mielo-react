import { forwardRef, useImperativeHandle, useRef } from "react"
import clsx from "clsx"

import {
  DropdownContentProps,
  DropdownHandles,
  Dropdown,
} from "../../containers/Dropdown"

import { SelectHandles, SelectProps } from "./Props"
import { SelectButton } from "./SelectButton"
import { BasicMenu } from "./BasicMenu"

export const Select = forwardRef<SelectHandles, SelectProps>(function Select(
  {
    className: _className,
    options,
    label,
    value,
    name,

    transparent,
    disabled,
    opened,

    postfix,
    prefix,
    accent,

    customItem,
    onChange,
    onClose,
    onOpen,
    size,

    ...rest
  },
  ref,
) {
  const dropdownRef = useRef<DropdownHandles>(null)
  const accentClassName = accent && (accent === true ? "accent" : accent)

  useImperativeHandle(ref, () => ({}))

  const dropdownProps = {
    onClose: onClose,
    onOpen: onOpen,
    opened,

    content: (props: DropdownContentProps) => {
      const buttonProps = {
        postfix,
        prefix,
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
        selected: value,
        customItem,
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
          selected: !!value,
          transparent,
          disabled,
        },
        _className,
      ),
    },

    props: {
      container: {
        "data-name": name,
        ...rest,
      },
      content: {
        "data-selected": !!value?.value,
      },
      menu: {
        // @TODO
      },
    },
  }

  return <Dropdown ref={dropdownRef} {...dropdownProps} />
})

Select.displayName = "Mie.Select"