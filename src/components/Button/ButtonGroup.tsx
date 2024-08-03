import clsx from "clsx"

import { ButtonGroupProps } from "./Props"

export function ButtonGroup({ className: _className, children }: ButtonGroupProps) {
  const className = clsx("mie buttons", _className)

  return <div className={className}>{children}</div>
}

ButtonGroup.displayName = "Mie.Button.Group"