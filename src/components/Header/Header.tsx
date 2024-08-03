import { forwardRef } from "react"
import clsx from "clsx"

import { HeaderProps } from "./Props"

export const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(
  {
    className: _className,
    inverted,
    iconSided,
    subtitle,
    flattened,
    center,
    title,
    size,
    icon,
  },
  ref,
) {
  const className = clsx(
    "mie header",
    size,
    { center, inverted, flattened },
    _className,
  )

  return (
    <div ref={ref} className={className}>
      {icon && iconSided && icon}

      <div className="heading">
        {icon && !iconSided && icon}
        {title && <div className="title">{title}</div>}
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
    </div>
  )
})

Header.displayName = "Mie.Header"