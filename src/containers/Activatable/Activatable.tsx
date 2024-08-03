import { forwardRef } from "react"
import clsx from "clsx"

import { ActivatableProps } from "./Props"

export const Activatable = forwardRef<HTMLDivElement, ActivatableProps>(
  function Activatable(
    { className: _className, children, accent, active, ...rest },
    ref,
  ) {
    const accentClassName = accent && (accent === true ? "accent" : accent)

    const className = clsx("mie activatable", accentClassName, { active }, _className)

    return (
      <div ref={ref} {...rest} className={className}>
        {children}
      </div>
    )
  },
)

Activatable.displayName = "Mie.Activatable"