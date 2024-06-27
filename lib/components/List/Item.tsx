import clsx from "clsx"

import {
  DetailedHTMLProps,
  LiHTMLAttributes,
  ForwardedRef,
  MouseEvent,
  forwardRef,
} from "react"

import { Item } from "../Item"

type OnClickItem = (
  event: MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLLIElement>,
) => void

export interface ListItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  onClick?: OnClickItem
  className?: string

  accent?: "error" | "warning" | "success"
  activatable?: boolean
  active?: boolean

  description?: string
  title?: string

  link?: string

  side?: JSX.Element | JSX.Element[]
  icon?: JSX.Element
}

export const ListItem = forwardRef(function ListItem(
  {
    className: _className,
    description,
    activatable,
    onClick,
    active,
    accent,
    title,
    side,
    icon,
    link,
    ...props
  }: ListItemProps,
  ref: ForwardedRef<any>,
) {
  const className = clsx(
    "list",
    accent,
    { activatable, active, link },
    _className,
  )

  const itemProps = {
    ...props,

    disableSidePropagation: true,
    description,
    className,
    onClick,
    accent,
    title,
    link,
    icon,
    side,
    ref,
  }

  return <Item {...itemProps} />
})

ListItem.displayName = "Adw.List.Item"
