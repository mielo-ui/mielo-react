import { ReactNode } from "react"
import clsx from "clsx"

import { InnerHeaderProp, InnerHeader } from "./InnerHeader"

export type HeaderBarAccent = boolean | "warning" | "error" | "success"

export interface HeaderBarProps {
  accent?: HeaderBarAccent
  className?: string

  transparent?: boolean
  bordered?: boolean

  header?: InnerHeaderProp
  right?: ReactNode
  left?: ReactNode

  attached?: "splitview"
}

export function HeaderBar({
  className: _className,
  transparent,
  bordered,
  attached,
  accent,
  header,
  left,
  right,
}: HeaderBarProps) {
  const attachedClassName = attached && `attached attached-${attached}`
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie headerbar",
    accentClassName,
    _className,
    { transparent, bordered },
    attachedClassName,
  )

  return (
    <div className={className}>
      <div className="left">{left}</div>
      <div className="center">
        <InnerHeader header={header} />
      </div>
      <div className="right">{right}</div>
    </div>
  )
}

HeaderBar.displayName = "Mie.HeaderBar"