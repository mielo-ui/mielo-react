import { ChangeEventHandler, ReactNode } from "react"
import clsx from "clsx"

export interface RadioProps {
  accent?: "warning" | "error" | "success"
  size?: "large" | "small"
  className?: string

  label?: string | ReactNode
  children?: string | ReactNode

  disabled?: boolean
  checked?: boolean
  name?: string

  onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Radio({
  className: _className,
  children,
  disabled,
  onChange,
  checked,
  accent,
  label,
  size,
  name,
}: RadioProps) {
  const radioId = `radio_${name}`

  const className = clsx("adw radio", accent, size, { disabled }, _className)

  return (
    <div className={className}>
      <input
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className="input"
        id={radioId}
        type="radio"
      />

      <label className="label" htmlFor={radioId}>
        <div className="indicator" />

        {(children || label) && (
          <div className="content">{children ? children : label}</div>
        )}
      </label>
    </div>
  )
}

Radio.displayName = "Adw.Radio"