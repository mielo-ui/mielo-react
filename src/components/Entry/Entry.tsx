import { createElement, forwardRef, useCallback } from "react"
import { Tooltip } from "react-tooltip"
import clsx from "clsx"

import { EntryProps } from "./Props"

import * as Icons from "../Icon/icons"
import { Button } from "../Button"

const MessageIcons = {
  accent: Icons.Dialog.Question,
  warning: Icons.Dialog.Warning,
  error: Icons.Dialog.Error,
  success: Icons.EmblemOk,
}

export const Entry = forwardRef<HTMLInputElement, EntryProps>(function Entry(
  {
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
  },
  ref,
) {
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

  const className = clsx("mie entry", accentClassName, size, { disabled }, _className)

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
        ref={ref}
      />

      <label htmlFor={inputId}>{placeholder}</label>

      {tooltip}
    </div>
  )
})

Entry.displayName = "Mie.Entry"