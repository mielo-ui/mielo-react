import clsx from "clsx"

export interface HeaderProps {
  title?: string
  subtitle?: string
  icon?: JSX.Element
  iconSided?: boolean
  inverted?: boolean
  flattened?: boolean
  center?: boolean
  
  size?: "tiny" | "small" | "small" | "large" | "big" | "huge" | "massive"
  attached?: "headerbar" | "list" | "dialog"
}

export function Header({
  inverted,
  iconSided,
  subtitle,
  flattened,
  attached,
  center,
  title,
  size,
  icon,
}: HeaderProps) {
  const attachedClassName = attached && `attached attached-${attached}`

  const className = clsx(
    "adw header",
    size && `size ${size}`,
    { center, inverted, flattened },
    attachedClassName,
  )

  return (
    <div className={className}>
      {icon && iconSided && icon}

      <div className="heading">
        {icon && !iconSided && icon}
        {title && <div className="title">{title}</div>}
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
    </div>
  )
}

Header.displayName = "Adw.Header"