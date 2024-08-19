import { createElement, forwardRef } from "react"
import clsx from "clsx"

import { TextProps } from "./Props"

export const Text = forwardRef<HTMLDivElement, TextProps>(function Text(
  {
    className: _className,
    semibold,
    children,
    element,
    regular,
    accent,
    center,
    invert,
    color,
    muted,
    light,
    bold,
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
      semibold,
      regular,
      center,
      invert,
      light,
      muted,
      bold,
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