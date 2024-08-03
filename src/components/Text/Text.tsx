import { createElement, forwardRef } from "react"
import clsx from "clsx"

import { TextProps } from "./Props"

export const Text = forwardRef<HTMLDivElement, TextProps>(function Text(
  { className: _className, accent, center, size, children, element },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie text",
    accentClassName,
    size,
    {
      center,
    },
    _className,
  )

  const textProps = {
    className,
    ref,
  }

  return createElement(element || "div", textProps, children)
})

Text.displayName = "Mie.Text"