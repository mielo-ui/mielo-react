import { ReactNode, createElement, useCallback } from "react"
import { Tooltip } from "react-tooltip"
import clsx from "clsx"

import { Button } from "../Button"

import { DialogQuestion } from "../Icons/icons/DialogQuestion"
import { DialogWarning } from "../Icons/icons/DialogWarning"
import { DialogError } from "../Icons/icons/DialogError"
import { EmblemOk } from "../Icons/icons/EmblemOk"

export type EntryAccent = boolean | "warning" | "error" | "success"
export type EntryType = "text" | "password" | "number"
export type EntrySize = "small" | "large"

export interface EntryProps {
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  value?: string
  name: string
  id?: string

  accent?: EntryAccent
  type?: EntryType
  size?: EntrySize

  messageIcon?: JSX.Element
  message?: ReactNode
}

const MessageIcons = {
  accent: DialogQuestion,
  warning: DialogWarning,
  error: DialogError,
  success: EmblemOk,
}

export function Entry({
  className: _className,
  onChange: _onChange,
  placeholder,
  messageIcon,
  disabled,
  message,
  accent,
  value,
  size,
  type,
  name,
  id,
}: EntryProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const inputId = `entry_${name}`
  const tooltipId = `${inputId}_tooltip`

  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value
      _onChange?.(value)
    },
    [_onChange],
  )

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

  const className = clsx(
    "mie entry",
    accentClassName,
    size,
    { disabled },
    _className,
  )

  return (
    <div id={id} className={className}>
      <input
        className={clsx({ filled: value && value.length > 0 })}
        onChange={onChange}
        disabled={disabled}
        value={value}
        id={inputId}
        name={name}
        type={type}
      />

      <label htmlFor={inputId}>{placeholder}</label>

      {tooltip}
    </div>
  )
}

Entry.displayName = "Mie.Entry"