import { ChangeEventHandler, ReactNode } from "react"
import clsx from "clsx"

export interface RadioProps {
  label?: string | ReactNode
  children?: string | ReactNode

  disabled?: boolean
  checked?: boolean
  name?: string

  onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Radio({
  children,
  label,
  checked,
  disabled,
  name,
  onChange,
}: RadioProps) {
  const radioId = `radio_${name}`

  return (
    <div className={clsx("adw radio", { disabled })}>
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