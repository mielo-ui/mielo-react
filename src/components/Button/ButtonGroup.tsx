import { ReactNode } from "react"
import clsx from "clsx"

export interface ButtonGroupProps {
  children?: ReactNode
  className?: string
}

export function ButtonGroup({
  className: _className,
  children,
}: ButtonGroupProps) {
  const className = clsx("mie buttons", _className)

  return <div className={className}>{children}</div>
}

ButtonGroup.displayName = "Mie.Button.Group"