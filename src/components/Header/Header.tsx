import { forwardRef } from "react"
import clsx from "clsx"

import { HeaderProps } from "./Props"

export const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(
  {
    className: _className,
    inverted,
    iconSided,
    accent,
    subtitle,
    flattened,
    color,
    center,
    title,
    size,
    icon,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie header",
    size,
    accentClassName,
    color,
    { center, inverted, flattened },
    _className,
  )

  return (
    <div ref={ref} className={className} {...rest}>
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