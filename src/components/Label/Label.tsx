import { MouseEventHandler, ReactNode } from "react"
import clsx from "clsx"

export interface LabelProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  className?: string
}

export function Label({
  className: _className,
  children,
  onClick,
}: LabelProps) {
  const className = clsx("mie label", _className)

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
