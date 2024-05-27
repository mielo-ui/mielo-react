import { useCallback, MouseEvent } from "react"
import clsx from "clsx"

export interface RowProps {
  header?: string
  description?: string

  icon?: JSX.Element
  iconStyle?: "filled" | "circular"

  right?: JSX.Element | JSX.Element[]
}

export function Row({
  header,
  description,
  icon,
  iconStyle,
  right,
}: RowProps) {
  const onClickRight = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }, [])

  return (
    <div className={clsx("row property")}>
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
    </div>
  )
}

Row.displayName = "Adw.Row"
