import { ReactNode } from "react"
import clsx from "clsx"

export type ViewAccent = boolean | "warning" | "error" | "success"

export interface ViewProps {
  accent?: ViewAccent
  className?: string
  style?: any

  // Background style
  sidebar?: boolean
  window?: boolean
  content?: boolean
  osd?: boolean

  // Content
  scrollable?: boolean
  children?: ReactNode
}

export function View({
  className: _className,
  scrollable,
  children,
  sidebar,
  content,
  accent,
  window,
  style,
  osd,
}: ViewProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie view",
    accentClassName,
    {
      scrollable,
      sidebar,
      content,
      window,
      osd,
    },
    _className,
  )

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}

View.displayName = "Mie.View"