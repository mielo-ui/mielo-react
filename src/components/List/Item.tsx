import clsx from "clsx"

import { ForwardedRef, forwardRef } from "react"
import { Item, ItemProps } from "../Item"

export interface ListItemProps extends ItemProps {}

export const ListItem = forwardRef(function ListItem(
  { className: _className, ...props }: ListItemProps,
  ref: ForwardedRef<any>,
) {
  const className = clsx("list", _className)

  const itemProps = {
    ...props,
    className,
    ref,
  }

  return <Item {...itemProps} />
})

ListItem.displayName = "Mie.List.Item"