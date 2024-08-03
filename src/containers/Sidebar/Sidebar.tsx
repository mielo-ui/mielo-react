import { forwardRef } from "react"
import clsx from "clsx"

import { SidebarProps } from "./Props"

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(
  {
    className: _className,
    animateStyle = "width",
    headerbar,
    children,
    accent,
    opened,
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
    animateStyle,
    { opened },
    _className,
  )

  return (
    <div ref={ref} {...rest} className={className}>
      {headerbar && headerbar}
      {children}
    </div>
  )
})

Sidebar.displayName = "Mie..Sidebar"