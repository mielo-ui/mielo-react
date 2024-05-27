import { Tooltip } from "react-tooltip"
import { useCallback } from "react"

import clsx from "clsx"

export interface EntryProps {
  onChange?: (value: string) => void
  error?: string[] | string | false
  type?: "text" | "password" | "number"
  placeholder: string
  disabled?: boolean
  value?: string
  name: string
  id?: string
}

export function Entry({
  onChange: _onChange,
  placeholder,
  disabled,
  error,
  value,
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

  const errorTooltip = !!error && (
    <div className="adw tooltip">
      <div id={tooltipId} className="indicator">
        ?
      </div>
      <Tooltip anchorSelect={`#${tooltipId}`}>
        <div className="adw tooltip-content">
          {Array.isArray(error) ? (
            error.map((msg, idx) => (
              <div key={idx} className="message">
                {msg}
              </div>
            ))
          ) : (
            <div className="message">{error}</div>
          )}
        </div>
      </Tooltip>
    </div>
  )

  return (
    <div id={id} className={clsx("adw entry", { disabled, error: !!error })}>
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

      {errorTooltip}
    </div>
  )
}

Entry.displayName = "Adw.Entry"