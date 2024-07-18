import { ReactNode } from "react"
import clsx from "clsx"

import { HeaderProp, InnerHeader } from "./InnerHeader"

export interface HeaderBarProps {
  accent?: boolean | "warning" | "error" | "success"
  transparent?: boolean
  bordered?: boolean

  header?: HeaderProp
  left?: ReactNode
  right?: ReactNode

  attached?: "splitview"
}

export function HeaderBar({
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
    { transparent, bordered },
    accentClassName,
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