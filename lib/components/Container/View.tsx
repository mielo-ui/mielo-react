import { ReactNode } from "react"
import clsx from "clsx"

export interface ViewProps {
  // Appearance
  accent?: boolean | "warning" | "error" | "success"
  bg?: boolean | "container" | "transparent"
  className?: string

  // Content
  children?: ReactNode

  // Layout
  padding?: boolean

  // Layout Flex
  flex?: boolean
  flex1?: boolean

  column?: boolean
  row?: boolean

  justifyContent?: "start" | "end" | "stretch" | "center"
  alignItems?: "start" | "end" | "stretch" | "center"
}

export function View({
  className: _className,
  children,
  padding,
  accent,
  bg,
  ...flexProps
}: ViewProps) {
  const accentClassName = accent === true ? "accent" : accent
  const bgClassName = bg === true ? "bg" : bg

  let flexClassName

  if (flexProps?.flex) {
    const { justifyContent, alignItems, ...flexClassNames } = flexProps

    flexClassName = Object.assign(
      {},
      flexClassNames,
      justifyContent && `justify-content-${justifyContent}`,
      alignItems && `align-items-${alignItems}`,
    )
  }

  const className = clsx(
    "adw view",
    _className,
    bgClassName,
    accentClassName,
    flexClassName,
  )

  return <div className={className}>{children}</div>
}