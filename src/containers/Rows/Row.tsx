import { forwardRef } from "react"
import clsx from "clsx"

import { Item } from "../../components/Item"
import { RowProps } from "./Props"

export const Row = forwardRef<HTMLDivElement, RowProps>(function Row(
  { className: _className, ...rest },
  ref,
) {
  const className = clsx("row property", _className)

  return <Item ref={ref} className={clsx("row property", className)} {...rest} />
})

Row.displayName = "Mie.Row"