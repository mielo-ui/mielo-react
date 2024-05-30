import { ReactNode } from "react"

export interface ClampProps {
  children?: ReactNode
  header?: ReactNode
}

export function Clamp({ header, children }: ClampProps) {
  return (
    <div className="adw clamp">
      {header && <div className="header">{header}</div>}
      <div className="content">{children}</div>
    </div>
  )
}

Clamp.displayName = "Adw.Clamp"