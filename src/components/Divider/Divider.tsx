import { ReactNode } from "react"
import clsx from "clsx"

export interface DividerProps {
  children?: ReactNode
  className?: string
}

export function Divider({ className, children }: DividerProps) {
  return (
    <div className={clsx("mie divider", { content: !!children }, className)}>
      {children}
    </div>
  )
}

Divider.displayName = "Mie.Divider"