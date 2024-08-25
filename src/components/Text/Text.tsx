import { createElement, forwardRef } from "react"
import clsx from "clsx"

import { TextProps } from "./Props"

export const Text = forwardRef<HTMLDivElement, TextProps>(function Text(
  {
    className: _className,
    children,
    element,
    accent,
    center,
    invert,
    color,
    muted,
    fsemibold,
    fregular,
    flight,
    fbold,
    size,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie text",
    accentClassName,
    color,
    size,
    {
      fsemibold,
      fregular,
      flight,
      fbold,
      center,
      invert,
      muted,
    },
    _className,
  )

  const textProps = {
    ...rest,
    className,
    ref,
  }

  return createElement(element || "div", textProps, children)
})

Text.displayName = "Mie.Text"