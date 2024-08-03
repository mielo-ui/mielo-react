import clsx from "clsx"

import { createElement, useCallback, forwardRef, MouseEvent } from "react"
import { ItemProps } from "./Props"

export const Item = forwardRef<any, ItemProps>(function Item(
  {
    disableSidePropagation = true,
    className: _className,
    description,
    activatable,
    inverted,
    vertical,
    onClick,
    content,
    label,
    active,
    accent,
    center,
    title,
    size,
    link,
    icon,
    side,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const onClickSide = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (disableSidePropagation) {
        event.stopPropagation()
      }
    },
    [disableSidePropagation],
  )

  const className = clsx(
    "mie item",
    accentClassName,
    size,
    { vertical, center, activatable, active },
    _className,
  )

  const body = (
    <>
      {label && label}
      {icon && <div className="indicator">{icon}</div>}

      <div className={clsx("content", { inverted })}>
        {content ? (
          content
        ) : (
          <>
            {title && <div className="title">{title}</div>}
            {description && <div className="description">{description}</div>}
          </>
        )}
      </div>

      {side && (
        <div className="side" onClick={onClickSide}>
          {side}
        </div>
      )}
    </>
  )

  const itemProps: any = Object.assign(
    {
      ...rest,
      className,
      onClick,
      ref,
    },
    link && { href: link },
  )

  return createElement(link ? "a" : "div", itemProps, body)
})

Item.displayName = "Mie.Item"