import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import clsx from "clsx"

import { ButtonGroup } from "./ButtonGroup"

export type ButtonAccent = boolean | "success" | "warning" | "error"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string

  children?: ReactNode
  label?: ReactNode

  accent?: ButtonAccent
  size?: ButtonSize

  iconLabeled?: boolean
  icon?: ReactNode

  transparent?: boolean
  circular?: boolean
  tertiary?: boolean
  filled?: boolean
  center?: boolean
  pilled?: boolean

  active?: boolean
  hover?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className: _className,
    transparent,
    iconLabeled,
    children,
    tertiary,
    circular,
    pilled,
    filled,
    center,
    accent,
    active,
    hover,
    label,
    icon,
    size,

    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx("mie button", accentClassName, size, _className, {
    labeled: icon && iconLabeled,
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
        {iconLabeled
          ? label && <div className="content">{label}</div>
          : label && label}
      </>
    )
  }

  return (
    <button ref={ref} className={className} {...rest}>
      {content}
    </button>
  )
})

Button.displayName = "Mie.Button"

export default Object.assign(Button, {
  Group: ButtonGroup,
})