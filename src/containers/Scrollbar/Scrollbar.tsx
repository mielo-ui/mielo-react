import { ReactNode } from "react"
import clsx from "clsx"

export interface ScrollbarProps {
  children?: ReactNode
  className?: string
}

export function Scrollbar({
  children,
  className,
  ...scrollbarProps
}: ScrollbarProps) {
  return (
    <div className={clsx("mie scrollable", className)} {...scrollbarProps}>
      {children}
    </div>
  )
}

Scrollbar.displayName = "Mie.Scrollbar"