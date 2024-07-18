import { ReactNode } from "react"
import clsx from "clsx"

export interface ViewProps {
  // Appearance
  accent?: boolean | "warning" | "error" | "success"
  shadow?: "outer" | "inner"
  rounded?: boolean | "extra"

  className?: string
  style?: any 

  // Background style
  sidebar?: boolean
  window?: boolean
  content?: boolean
  osd?: boolean
  scrollable?: boolean

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
  scrollable,
  children,
  padding,
  accent,
  sidebar,
  window,
  shadow,
  rounded,
  content,
  style,
  osd,
  ...flexProps
}: ViewProps) {
  const roundedCLassName =
    rounded && (rounded === true ? "rounded" : `rounded-${rounded}`)

  const accentClassName = accent === true ? "accent" : accent
  const shadowClassName = shadow && `shadow-${shadow}`

  const flexClassName = []

  if (flexProps?.flex) {
    const { justifyContent, alignItems, flex1, flex, column, row } = flexProps
    flex === true && flexClassName.push("flex")
    flex1 && flexClassName.push("flex-1")

    justifyContent && flexClassName.push(`justify-content-${justifyContent}`)
    alignItems && flexClassName.push(`align-items-${alignItems}`)
    flexClassName.push({ column, row })
  }

  const className = clsx(
    "mie view",
    _className,
    accentClassName,
    shadowClassName,
    roundedCLassName,
    ...flexClassName,
    {
      scrollable,
      padding,
      sidebar,
      window,
      content,
      osd,
    },
  )

  return <div style={style} className={className}>{children}</div>
}