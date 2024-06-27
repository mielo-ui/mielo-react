import { ReactNode } from "react"
import clsx from "clsx"

export type IconAccent = true | "success" | "warning" | "error"
export type IconSize = "small" | "medium" | "large"

export interface IconProps {
  accent?: IconAccent
  size?: IconSize
  icon: ReactNode

  className?: string
  circular?: boolean
  filled?: boolean
}

export function Icon({
  className: _className,
  circular,
  filled,
  accent,
  icon,
  size,
}: IconProps) {
  const className = clsx(
    "adw icon",
    accent,
    size,
    { circular, filled },
    _className,
  
  )
  return <div className={className}>{icon}</div>
}

Icon.displayName = "Adw.Icon"
