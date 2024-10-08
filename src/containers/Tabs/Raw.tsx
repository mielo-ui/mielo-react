import { forwardRef } from "react"
import clsx from "clsx"

import { RawTabsProps } from "./Props"

export const RawTabs = forwardRef<HTMLDivElement, RawTabsProps>(function RawTabs(
  { className: _className, accent, color, children },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx("mie tabs", accentClassName, color, _className)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
})

RawTabs.displayName = "Mie.Tabs.Raw"