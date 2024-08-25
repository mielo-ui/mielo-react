import { forwardRef } from "react"
import clsx from "clsx"

import { SidebarProps } from "./Props"

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(
  {
    className: _className,
    animateStyle = "width",
    opened = false,
    headerbar,
    children,
    accent,
    color,
    size,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie sidebar",
    size,
    accentClassName,
    color,
    animateStyle,
    { opened },
    _className,
  )

  return (
    <div ref={ref} {...rest} className={className}>
      <div className="content">
        {headerbar && headerbar}
        {children}
      </div>
    </div>
  )
})

Sidebar.displayName = "Mie..Sidebar"