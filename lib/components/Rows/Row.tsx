import clsx from "clsx"

import { Item, ItemProps } from "../Item"

export interface RowProps extends ItemProps {
  // @PASS
}

export function Row({ className, ...props }: RowProps) {
  return <Item className={clsx("row property", className)} {...props} />
}

Row.displayName = "Mie.Row"
