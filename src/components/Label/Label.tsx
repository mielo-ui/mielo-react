import { forwardRef } from "react"
import clsx from "clsx"

import { LabelProps } from "./Props"

export const Label = forwardRef<HTMLDivElement, LabelProps>(function Label(
  {
    className: _className,
    transparent,
    circular,
    floating,
    bordered,
    children,
    accent,
    color,
    size,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const floatingClassName =
    floating && (floating === true ? "floating" : `floating ${floating}`)

  const className = clsx(
    "mie label",
    size,
    accentClassName,
    color,
    floatingClassName,
    { bordered, transparent, circular },
    _className,
  )

  return (
    <div ref={ref} {...rest} className={className}>
      {children}
    </div>
  )
})

Label.displayName = "Mie.Label"