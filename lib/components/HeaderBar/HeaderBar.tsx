import { ReactNode } from "react"
import clsx from "clsx"

import { HeaderProp, InnerHeader } from "./InnerHeader"

export interface HeaderBarProps {
  transparent?: boolean
  borderless?: boolean

  header?: HeaderProp
  left?: ReactNode
  right?: ReactNode

  attached?: "splitview"
}

export function HeaderBar({
  transparent,
  borderless,
  attached,
  header,
  left,
  right,
}: HeaderBarProps) {
  const attachedClassName = attached && `attached attached-${attached}`
  
  const className = clsx(
    "adw headerbar",
    { transparent, borderless },
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

HeaderBar.displayName = "Adw.HeaderBar"