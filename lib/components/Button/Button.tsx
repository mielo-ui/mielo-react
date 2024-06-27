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
  
  accent?: ButtonAccent
  color?: ButtonColor
  size?: ButtonSize
  label?: string
  
  iconLabeled?: boolean
  icon?: JSX.Element
  
  transparent?: boolean
  circular?: boolean
  tertiary?: boolean
  filled?: boolean
  center?: boolean
  pilled?: boolean
}

export function Button({
  transparent,
  iconLabeled,
  tertiary,
  circular,
  pilled,
  filled,
  center,
  accent,
  label,
  color,
  icon,
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
      tertiary,
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