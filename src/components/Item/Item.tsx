import clsx from "clsx"

import {
  createElement,
  useCallback,
  forwardRef,
  MouseEvent,
  ReactNode,
} from "react"

type OnClick = (
  event: MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLLIElement>,
) => void

export type ItemAccent = boolean | "error" | "warning" | "success"
export type ItemSize = "small" | "large"

export interface ItemProps {
  onClick?: OnClick

  description?: ReactNode
  content?: ReactNode
  title?: ReactNode
  link?: string

  icon?: ReactNode
  side?: ReactNode

  activatable?: boolean
  active?: boolean

  inverted?: boolean
  vertical?: boolean
  center?: boolean

  accent?: ItemAccent
  size?: ItemSize

  disableSidePropagation?: boolean
  className?: string

  tabIndex?: number
}

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