import { MouseEventHandler, ReactNode } from "react"
import clsx from "clsx"

export interface WindowProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  className?: string
}

export function Window({
  className: _className,
  children,
  onClick,
}: WindowProps) {
  const className = clsx("mie window", _className)

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
