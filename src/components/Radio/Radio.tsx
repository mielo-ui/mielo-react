import { forwardRef } from "react"
import clsx from "clsx"

import { RadioProps } from "./Props"

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    className: _className,
    children,
    disabled,
    checked,
    accent,
    value,
    size,
    id,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const className = clsx("mie radio", accentClassName, size, { disabled }, _className)

  const inputProps = {
    className: "input",
    type: "radio",
    disabled,
    checked,
    ref,
    id,
    ...rest,
  }

  return (
    <div className={className}>
      <input {...inputProps} />

      <label className="label" htmlFor={id}>
        <div className="indicator" />

        {children && <div className="content">{children}</div>}
      </label>
    </div>
  )
})

Radio.displayName = "Mie.Radio"