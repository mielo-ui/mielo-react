import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

export type ButtonColor =
  | "orange"
  | "purple"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"

export type ButtonAccent = true | "success" | "warning" | "error"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string 
  size?: ButtonSize
  accent?: ButtonAccent
  color?: ButtonColor
  label?: string
  iconLabeled?: boolean
  icon?: JSX.Element
  pilled?: boolean
  transparent?: boolean
  center?: boolean
  filled?: boolean
  circular?: boolean
}

export function Button({
  label,
  icon,
  pilled,
  transparent,
  iconLabeled,
  center,
  filled,
  accent,
  color,
  circular,
  size,
  className: _className,
  ...props
}: ButtonProps) {
  const className = clsx(
    "adw button",
    {
      labeled: icon && iconLabeled,
      content: icon && label,
      icon: !!icon,
      transparent,
      circular,
      center,
      pilled,
      filled,
    },
    typeof accent === "boolean" && accent ? "accent" : accent,
    color,
    size,
    _className,
  )

  return (
    <button className={className} {...props}>
      {icon && <div className="icon">{icon}</div>}
      {label && label}
    </button>
  )
}

Button.displayName = "Adw.Button"