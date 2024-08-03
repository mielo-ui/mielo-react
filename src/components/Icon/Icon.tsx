import { forwardRef } from "react"
import clsx from "clsx"

import { IconProps } from "./Props"

export const Icon = forwardRef<HTMLDivElement, IconProps>(function Icon(
  { className: _className, circular, filled, accent, icon, size, bg },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie icon",
    accentClassName,
    size,
    { circular, filled, bg },
    _className,
  )

  return (
    <div ref={ref} className={className}>
      {icon}
    </div>
  )
})

Icon.displayName = "Mie.Icon"