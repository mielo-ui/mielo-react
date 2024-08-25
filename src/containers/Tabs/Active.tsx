import clsx from "clsx"

import { TabBackgroundProps } from "./Props"
import { collectClassnames, extractProps } from "../../layout"

export function TabBackground(props: TabBackgroundProps) {
  const {
    props: { className: _className, height, offset, accent, color, width },
    ...layoutProps
  } = extractProps(props)

  const layoutClassNames = collectClassnames(layoutProps, {
    flex: false,
  })

  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie tab background",
    accentClassName,
    color,
    ...layoutClassNames,
    _className,
  )

  return <div className={className} style={{ height, width, left: offset }} />
}