import clsx from "clsx"

import {
  ChangeEventHandler,
  FocusEventHandler,
  useCallback,
  forwardRef,
  useState,
} from "react"

import { EntryProps } from "./Props"

export const Entry = forwardRef<HTMLInputElement, EntryProps>(function Entry(
  {
    className: _className,
    onChange: _onChange,
    onFocus: _onFocus,
    onBlur: _onBlur,
    containerId,
    placeholder,
    transparent,
    disabled,
    bordered,
    accent,
    color,
    label,
    postfix,
    prefix,
    value,
    size,
    id,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const [focused, setFocused] = useState(false)

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      _onChange?.(event)
    },
    [_onChange],
  )

  const onFocus: FocusEventHandler<HTMLInputElement> = useCallback(event => {
    setFocused(true)
    _onFocus?.(event)
  }, [])

  const onBlur: FocusEventHandler<HTMLInputElement> = useCallback(event => {
    setFocused(false)
    _onBlur?.(event)
  }, [])

  const className = clsx(
    "mie entry",
    accentClassName,
    color,
    size,
    { disabled, transparent, bordered },
    _className,
  )

  const inputProps = {
    className: clsx({ filled: value && value.length > 0 }),
    placeholder: focused ? placeholder : "",
    onChange,
    disabled,
    onFocus,
    onBlur,
    value,
    ref,
    id,
    ...rest,
  }

  return (
    <div id={containerId} className={className}>
      {prefix}

      <div className="field">
        <input {...inputProps} />
        <label htmlFor={id}>{label}</label>
      </div>

      {postfix}
    </div>
  )
})

Entry.displayName = "Mie.Entry"