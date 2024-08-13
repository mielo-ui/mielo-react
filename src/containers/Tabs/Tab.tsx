import { forwardRef } from "react"
import clsx from "clsx"

import { TabProps } from "./Props"
import { collectClassnames, extractProps } from "../../layout"

export const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab(props, ref) {
  const {
    props: {
      className: _className,
      transparent,
      selected,
      onClick,
      accent,
      title,
      icon,
      name,
    },
    ...layoutProps
  } = extractProps(props)

  const layoutClassNames = collectClassnames(layoutProps, {
    flex: false,
  })

  const accentClassName = accent && (accent === true ? "accent" : accent)
  const active = name === selected

  const className = clsx(
    "mie tab",
    accentClassName,
    _className,
    { active, transparent },
    ...layoutClassNames,
  )

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {icon && icon}
      {title}
    </div>
  )
})

Tab.displayName = "Mie.Tabs.Tab"