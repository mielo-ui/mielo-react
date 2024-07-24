import clsx from "clsx"

import { Item, ItemProps } from "../../components/Item"

export interface RowProps extends ItemProps {
  className?: string
}

export function Row({ className: _className, ...rest }: RowProps) {
  const className = clsx("row property", _className)
  return <Item className={clsx("row property", className)} {...rest} />
}

Row.displayName = "Mie.Row"