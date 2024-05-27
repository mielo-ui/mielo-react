import { ReactNode } from "react"
import clsx from "clsx"

export interface SegmentProps {
  children?: ReactNode
  placeholder?: boolean | "dev"
}

export function Segment({ children, placeholder }: SegmentProps) {
  return (
    <div className={clsx("adw segment", placeholder, { placeholder })}>
      {children}
    </div>
  )
}

Segment.displayName = "Adw.Segment"