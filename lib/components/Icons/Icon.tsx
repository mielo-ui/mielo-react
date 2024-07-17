import { ReactNode } from "react"
import clsx from "clsx"

import { variantToClass } from "../../utils"

export type IconAccent = true | "success" | "warning" | "error"
export type IconRounded = true | "small" | "large" | "circle"
export type IconSpace = true | "small" | "large" | "big"

export type IconSize =
  | "mini"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface IconProps {
  rounded?: IconRounded
  accent?: IconAccent
  space?: IconSpace
  size?: IconSize

  className?: string
  icon: ReactNode

  circular?: boolean
  filled?: boolean
  bg?: true
}

export function Icon({
  className: _className,
  circular,
  filled,
  space,
  rounded,
  accent,
  icon,
  size,
  bg,
}: IconProps) {
  const roundedClassName = variantToClass("rounded", rounded, true)
  const spaceClassName = variantToClass("space", space, true)
  const accentClassName = accent === true ? "accent" : accent

  const className = clsx(
    "mie icon",
    _className,
    size,
    accentClassName,
    spaceClassName,
    roundedClassName,
    { circular, filled, bg },
  )

  return <div className={className}>{icon}</div>
}

Icon.displayName = "Mie.Icon"
