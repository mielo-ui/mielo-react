import clsx from "clsx"

import {
  createElement,
  ForwardedRef,
  useCallback,
  forwardRef,
  MouseEvent,
  ReactNode,
} from "react"

export interface ItemProps {
  description?: ReactNode
  content?: ReactNode
  title?: ReactNode

  icon?: ReactNode
  side?: ReactNode

  inverted?: boolean
  vertical?: boolean
  center?: boolean

  accent?: "error" | "warning" | "success"
  size?: "small" | "large"

  disableSidePropagation?: boolean
  className?: string

  link?: string

  onClick?: (event: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void

  [prop: string]: any
}

export const Item = forwardRef(function Item(
  {
    className: _className,
    disableSidePropagation,
    description,
    inverted,
    vertical,
    onClick,
    content,
    accent,
    center,
    title,
    size,
    link,
    icon,
    side,
    ...props
  }: ItemProps,
  ref: ForwardedRef<any>,
) {
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
    accent,
    size,
    { vertical, center },
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
      ...props,
      className,
      onClick,
      ref,
    },
    link && { href: link },
  )

  return createElement(link ? "a" : "div", itemProps, body)
})

Item.displayName = "Mie.Item"