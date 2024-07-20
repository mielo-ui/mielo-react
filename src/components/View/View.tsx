import { ReactNode } from "react"
import pick from "lodash.pick"
import clsx from "clsx"

import {
  viewFlexboxClass,
  viewIndentClass,
  ViewIndentProps,
  ViewFlexProps,
} from "./common"

export type ViewAccent = boolean | "warning" | "error" | "success"
export type ViewRounded = boolean | "extra"
export type ViewShadow = "outer" | "inner"

export interface ViewProps extends ViewFlexProps, ViewIndentProps {
  // Appearance
  rounded?: ViewRounded
  accent?: ViewAccent
  shadow?: ViewShadow

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

function View({
  className: _className,
  scrollable,
  children,
  accent,
  sidebar,
  window,
  shadow,
  rounded,
  content,
  style,
  osd,
  ...props
}: ViewProps) {
  // prettier-ignore
  const indentProps = pick(props, [
    "p", "ph", "pv", "pt", "pr", "pb", "pl",
    "m", "mh", "mv", "mt", "mr", "mb", "ml",
  ])

  const flexProps = pick(props, [
    "justifyContent",
    "alignItems",
    "column",
    "flex1",
    "flex",
    "row",
  ])

  const roundedCLassName =
    rounded && (rounded === true ? "rounded" : `rounded-${rounded}`)

  const accentClassName = accent === true ? "accent" : accent
  const shadowClassName = shadow && `shadow-${shadow}`
  const indentClassName = viewIndentClass(indentProps)
  const flexClassName = viewFlexboxClass(flexProps)

  const className = clsx(
    "mie view",
    _className,
    accentClassName,
    shadowClassName,
    roundedCLassName,
    ...indentClassName,
    ...flexClassName,
    {
      scrollable,
      sidebar,
      window,
      content,
      osd,
    },
  )

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}

View.displayName = "Mie.View"

export default Object.assign(View, {
  viewFlexboxClass,
  viewIndentClass,
})
