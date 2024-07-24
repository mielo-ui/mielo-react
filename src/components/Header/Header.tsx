import clsx from "clsx"

export type HeaderSize =
  | "tiny"
  | "small"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface HeaderProps {
  icon?: JSX.Element
  subtitle?: string
  title?: string

  className?: string
  size?: HeaderSize

  iconSided?: boolean
  flattened?: boolean
  inverted?: boolean
  center?: boolean
}

export function Header({
  className: _className,
  inverted,
  iconSided,
  subtitle,
  flattened,
  center,
  title,
  size,
  icon,
}: HeaderProps) {
  const className = clsx(
    "mie header",
    size,
    { center, inverted, flattened },
    _className,
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

Header.displayName = "Mie.Header"