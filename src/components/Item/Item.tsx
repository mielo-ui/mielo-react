import pick from "lodash.pick"
import clsx from "clsx"

import {
  createElement,
  ForwardedRef,
  useCallback,
  forwardRef,
  MouseEvent,
  ReactNode,
} from "react"

import { View, ViewIndentProps } from "../View"

type OnClick = (
  event: MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLLIElement>,
) => void

export interface ItemProps extends ViewIndentProps {
  onClick?: OnClick

  description?: ReactNode
  content?: ReactNode
  title?: ReactNode
  link?: string

  icon?: ReactNode
  side?: ReactNode
  
  activatable?: boolean,
  active?: boolean

  inverted?: boolean
  vertical?: boolean
  center?: boolean

  accent?: "error" | "warning" | "success"
  size?: "small" | "large"

  disableSidePropagation?: boolean
  className?: string

  tabIndex?: number
}

export const Item = forwardRef(function Item(
  {
    disableSidePropagation = true,
    className: _className,
    description,
    activatable,
    inverted,
    vertical,
    onClick,
    content,
    accent,
    active,
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
  // prettier-ignore
  const indentProps = pick(props, [
    "p", "ph", "pv", "pt", "pr", "pb", "pl",
    "m", "mh", "mv", "mt", "mr", "mb", "ml",
  ])

  const indentClassName = View.viewIndentClass(indentProps)

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
    { vertical, center, activatable, active },
    ...indentClassName,
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