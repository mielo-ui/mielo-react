import clsx from "clsx"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  iconLabeled?: boolean
  icon?: JSX.Element
  pilled?: boolean
  transparent?: boolean
  accent?: "red" | "green" | "blue" | "purple"
  filled?: boolean
  circular?: boolean
}

export function Button({
  label,
  icon,
  pilled,
  transparent,
  iconLabeled,
  filled,
  accent,
  circular,
  className: _className,
  ...props
}: ButtonProps) {
  const className = clsx(
    "adw button",
    {
      icon: !!icon,
      transparent,
      labeled: icon && iconLabeled,
      content: icon && label,
      pilled,
      filled,
      circular,
    },
    accent,
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