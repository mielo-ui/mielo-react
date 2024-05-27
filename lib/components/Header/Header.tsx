import clsx from "clsx"

export interface HeaderProps {
  title: string
  subtitle?: string
  icon?: JSX.Element
  center?: boolean
  size?: "small" | "medium"
  actions?: JSX.Element | JSX.Element[]

  attached?: "headerbar" | "list"
}

export function Header({
  title,
  subtitle,
  size,
  icon,
  center,
  actions,
  attached,
}: HeaderProps) {
  const attachedClassName = attached && `attached attached-${attached}`
  const className = clsx("adw header", size, { center }, attachedClassName)
  
  const header = (
    <>
      {icon && <div className="icon">{icon}</div>}
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </>
  )

  return actions ? (
    <div className={className}>
      <div className="content">{header}</div>
      <div className="actions">{actions}</div>
    </div>
  ) : (
    <div className={className}>{header}</div>
  )
}

Header.displayName = "Adw.Header"