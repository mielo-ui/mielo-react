import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

export type ButtonColor =
  | "orange"
  | "purple"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"

export type ButtonAccent = boolean | "success" | "warning" | "error"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string

  children?: ReactNode
  label?: ReactNode

  accent?: ButtonAccent
  size?: ButtonSize

  iconLabeled?: boolean
  icon?: JSX.Element

  transparent?: boolean
  circular?: boolean
  tertiary?: boolean
  filled?: boolean
  center?: boolean
  pilled?: boolean

  active?: boolean
  hover?: boolean
}

export function Button({
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
  className: _className,
  ...props
}: ButtonProps) {
  const accentClassName =
    typeof accent === "boolean" && accent ? "accent" : accent

  const className = clsx(
    "adw button",
    {
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
    },
    accentClassName,
    size,
    _className,
  )

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
    <button className={className} {...props}>
      {content}
    </button>
  )
}

Button.displayName = "Adw.Button"