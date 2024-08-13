import clsx from "clsx"

import {
  createElement,
  useCallback,
  forwardRef,
  MouseEvent,
  ForwardedRef,
} from "react"

import { ItemProps } from "./Props"

function ItemBase(
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
  }: ItemProps<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>,
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
      {icon && icon}

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

  return createElement(
    link ? "a" : "div",
    {
      href: link,
      className,
      onClick,
      ref,
      ...rest,
    },
    body,
  )
}

export const Item = forwardRef(ItemBase)
Item.displayName = "Mie.Item"