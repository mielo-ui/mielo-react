import { createElement, forwardRef } from "react"
import clsx from "clsx"

import { ButtonGroup } from "./ButtonGroup"
import { ButtonProps } from "./Props"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className: _className,
    transparent,
    children,
    tertiary,
    circular,
    pilled,
    filled,
    center,
    accent,
    active,
    color,
    hover,
    label,
    link,
    icon,
    size,

    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx("mie button", accentClassName, color, size, _className, {
    content: icon && label,
    transparent,
    tertiary,
    circular,
    center,
    pilled,
    filled,
    active,
    hover,
  })

  let content
  if (children) {
    content = children
  } else {
    content = (
      <>
        {icon && icon}
        {label && label}
      </>
    )
  }

  return createElement(
    link ? "a" : "button",
    { ref, href: link ? link : undefined, className, ...rest },
    content,
  )
})

Button.displayName = "Mie.Button"

export default Object.assign(Button, {
  Group: ButtonGroup,
})