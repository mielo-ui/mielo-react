import { ReactNode, createElement, useCallback } from "react"
import { Tooltip } from "react-tooltip"
import clsx from "clsx"

import { DropdownContentProps } from "./Dropdown"
import { OptionValue } from "./BasicMenu"
import { ChevronDown } from "./Icons"

import { Button } from "../Button"

import { DialogQuestion } from "../Icons/icons/DialogQuestion"
import { DialogWarning } from "../Icons/icons/DialogWarning"
import { DialogError } from "../Icons/icons/DialogError"
import { EmblemOk } from "../Icons/icons/EmblemOk"

export type SelectButtonAccent = boolean | "warning" | "error" | "success"
export type SelectButtonSize = "small" | "large"

export interface SelectButtonProps extends DropdownContentProps {
  selected?: OptionValue
  label?: string
  name?: string

  accent?: SelectButtonAccent
  size?: SelectButtonSize

  messageIcon?: JSX.Element
  message?: ReactNode
}

const MessageIcons = {
  accent: DialogQuestion,
  warning: DialogWarning,
  error: DialogError,
  success: EmblemOk,
}

export function SelectButton({
  selected,
  label,
  name,

  size,

  isOpen,
  close,
  open,

  messageIcon,
  message,
  accent,
}: SelectButtonProps) {
  const tooltipId = `${name}_tooltip`

  const onClick = useCallback(() => {
    isOpen ? close() : open()
  }, [isOpen])

  const _messageIcon = accent
    ? typeof accent === "boolean"
      ? MessageIcons.accent
      : MessageIcons[accent]
    : false

  const messageIndicatorIcon = !messageIcon
    ? _messageIcon && createElement(_messageIcon)
    : messageIcon

  const tooltip = !!message && (
    <>
      <Button
        icon={messageIndicatorIcon}
        className="indicator"
        id={tooltipId}
        size={size}
        transparent
        circular
      />

      <Tooltip anchorSelect={"#" + tooltipId}>{message}</Tooltip>
    </>
  )

  return (
    <div
      className={clsx("base", { opened: isOpen, selected: !!selected })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="header">
        <div className="label">{label}</div>
        {selected && <div className="value">{selected.label}</div>}
      </div>

      {tooltip}

      <div className="arrow">
        <ChevronDown />
      </div>
    </div>
  )
}
