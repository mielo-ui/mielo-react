import { ReactNode } from "react"

import { ListItem } from "./Item"
import clsx from "clsx"

export interface ListProps {
  children?: ReactNode
  className?: string
}

function List({ className: _className, children }: ListProps) {
  const className = clsx("mie list", _className)

  return <div className={className}>{children}</div>
}

List.displayName = "Mie.List"

export default Object.assign(List, {
  Item: ListItem,
})