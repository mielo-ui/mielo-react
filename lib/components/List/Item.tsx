import { useCallback, MouseEvent } from "react"
import clsx from "clsx"

export interface ListItemProps {
  onClickLink?: (event: MouseEvent<HTMLAnchorElement>) => void
  onClick?: (event: MouseEvent<HTMLLIElement>) => void
  link?: string

  activatable?: boolean
  active?: boolean

  header?: string
  description?: string

  icon?: JSX.Element  
  iconStyle?: "filled" | "circular"

  right?: JSX.Element | JSX.Element[]
}

export function ListItem({
  description,
  activatable,
  onClickLink,
  iconStyle,
  onClick,
  active,
  header,
  right,
  icon,
  link,
}: ListItemProps) {
  const onClickRight = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }, [])

  const content = (
    <>
      {icon && (
        <div
          className={clsx("adw icon", {
            filled: iconStyle === "filled",
            "filled circular": iconStyle === "circular",
          })}
        >
          {icon}
        </div>
      )}

      <div className="content">
        {header && <div className="header">{header}</div>}
        {description && <div className="description">{description}</div>}
      </div>

      {right && (
        <div className="right" onClick={onClickRight}>
          {right}
        </div>
      )}
    </>
  )

  return (
    <li onClick={onClick} className={clsx("item", { activatable, active, link })}>
      {link ? (
        <a href={link} onClick={onClickLink} className="link">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

ListItem.displayName = "Adw.List.Item"
