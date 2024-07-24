import { forwardRef, ReactNode } from "react"
import clsx from "clsx"

import { TabsAccent } from "./Raw"

export interface TabOption {
  accent?: TabsAccent
  icon?: JSX.Element
  title: ReactNode
  name: string
}

export interface TabProps extends TabOption {
  onClick?: (event: any) => void
  className?: string

  transparent?: boolean
  selected: string
  index: number
}

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