import clsx from "clsx"

import { TabsAccent } from "./Raw"

export interface TabBackgroundProps {
  height: number | string
  offset: number | string
  width: number | string
  accent?: TabsAccent
  className?: string
}

export function TabBackground({
  className: _className,
  height,
  offset,
  accent,
  width,
}: TabBackgroundProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  return (
    <div
      className={clsx("mie tab background", accentClassName, _className)}
      style={{ height, width, left: offset }}
    />
  )
}