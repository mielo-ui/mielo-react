import { ClampProps } from "./Props"

export function Clamp({ header, children }: ClampProps) {
  return (
    <div className="mie clamp">
      {header && <div className="header">{header}</div>}
      <div className="content">{children}</div>
    </div>
  )
}

Clamp.displayName = "Mie.Clamp"