import clsx from "clsx"

import { DividerProps } from "./Props"

export function Divider({ className: _className, children, ...rest }: DividerProps) {
  const className = clsx("mie divider", { content: !!children }, _className)

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Divider.displayName = "Mie.Divider"