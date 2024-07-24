import { forwardRef, ReactNode } from "react"
import clsx from "clsx"

export type IconAccent = true | "success" | "warning" | "error"

export type IconSize =
  | "mini"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface IconProps {
  accent?: IconAccent
  size?: IconSize

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(function Icon(
  { className: _className, circular, filled, accent, icon, size, bg },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie icon",
    accentClassName,
    size,
    { circular, filled, bg },
    _className,
  )

  return (
    <div ref={ref} className={className}>
      {icon}
    </div>
  )
})

Icon.displayName = "Mie.Icon"