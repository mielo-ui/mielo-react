import { ReactNode, createElement, useCallback } from "react"
import { Tooltip } from "react-tooltip"
import clsx from "clsx"

import { Button } from "../Button"

import { DialogQuestion } from "../Icons/icons/DialogQuestion"
import { DialogWarning } from "../Icons/icons/DialogWarning"
import { DialogError } from "../Icons/icons/DialogError"
import { EmblemOk } from "../Icons/icons/EmblemOk"

export interface EntryProps {
  onChange?: (value: string) => void
  type?: "text" | "password" | "number"
  size?: "small" | "large"
  placeholder: string
  disabled?: boolean
  value?: string
  name: string
  id?: string

  accent?: "error" | "warning" | "success"
  messageIcon?: JSX.Element
  message?: ReactNode
}

const MessageIcons = {
  question: DialogQuestion,
  warning: DialogWarning,
  error: DialogError,
  success: EmblemOk,
}

export function Entry({
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
  const inputId = `entry_${name}`
  const tooltipId = `${inputId}_tooltip`

  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value
      _onChange?.(value)
    },
    [_onChange],
  )

  const messageIndicatorIcon = !messageIcon
    ? createElement(MessageIcons[accent ? accent : "question"])
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
    <div id={id} className={clsx("adw entry", accent, size, { disabled })}>
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

Entry.displayName = "Adw.Entry"