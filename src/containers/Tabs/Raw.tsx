import { forwardRef, ReactNode } from "react"
import clsx from "clsx"

export type TabsAccent = boolean | "warning" | "error" | "success"

export interface RawTabsProps {
  children?: ReactNode
  accent?: TabsAccent
  className?: string
}

export const RawTabs = forwardRef<HTMLDivElement, RawTabsProps>(
  function RawTabs({ className: _className, accent, children }, ref) {
    const accentClassName = accent && (accent === true ? "accent" : accent)

    const className = clsx("mie tabs", accentClassName, _className)

    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  },
)

RawTabs.displayName = "Mie.Tabs.Raw"