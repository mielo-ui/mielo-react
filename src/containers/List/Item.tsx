import { ForwardedRef, forwardRef } from "react"
import clsx from "clsx"

import { Item } from "../../components/Item"
import { ListItemProps } from "./Props"

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