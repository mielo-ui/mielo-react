import { forwardRef } from "react"
import clsx from "clsx"

import { RadioProps } from "./Props"

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    className: _className,
    children,
    disabled,
    onChange,
    checked,
    accent,
    value,
    label,
    size,
    name,
  },
  ref,
) {
  const radioId = `radio_${name}`

  const accentClassName = accent && (accent === true ? "accent" : accent)
  const className = clsx("mie radio", accentClassName, size, { disabled }, _className)

  return (
    <div className={className}>
      <input
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className="input"
        value={value}
        id={radioId}
        name={name}
        type="radio"
        ref={ref}
      />

      <label className="label" htmlFor={`#${radioId}`}>
        <div className="indicator" />

        {(children || label) && (
          <div className="content">{children ? children : label}</div>
        )}
      </label>
    </div>
  )
})

Radio.displayName = "Mie.Radio"