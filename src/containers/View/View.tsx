import { forwardRef } from "react"
import clsx from "clsx"

import { ViewProps } from "./Props"

export const View = forwardRef<HTMLDivElement, ViewProps>(function View(
  {
    className: _className,
    activatable,
    scrollable,
    children,
    accent,
    style,
    bg,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie view",
    bg,
    accentClassName,
    {
      activatable,
      scrollable,
    },
    _className,
  )

  return (
    <div ref={ref} {...rest} className={className}>
      {children}
    </div>
  )
})

View.displayName = "Mie.View"