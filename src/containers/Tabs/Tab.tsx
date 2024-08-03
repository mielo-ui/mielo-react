import { forwardRef } from "react"
import clsx from "clsx"

import { TabProps } from "./Props"

export const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab(
  {
    className: _className,
    transparent,
    selected,
    onClick,
    accent,
    title,
    icon,
    name,
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const active = name === selected

  const className = clsx(
    "mie tab",
    accentClassName,
    { active, transparent },
    _className,
  )

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {icon && icon}
      {title}
    </div>
  )
})

Tab.displayName = "Mie.Tabs.Tab"