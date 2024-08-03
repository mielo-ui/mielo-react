import clsx from "clsx"

import { TabBackgroundProps } from "./Props"

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