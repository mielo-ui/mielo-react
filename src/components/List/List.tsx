import { ReactNode } from "react"

import { View, ViewIndentProps } from "../View"
import { ListItem } from "./Item"
import pick from "lodash.pick"
import clsx from "clsx"

export interface ListProps extends ViewIndentProps {
  children?: ReactNode
  className?: string
}

function List({ className: _className, children, ...props }: ListProps) {
  // prettier-ignore
  const indentProps = pick(props, [
    "p", "ph", "pv", "pt", "pr", "pb", "pl",
    "m", "mh", "mv", "mt", "mr", "mb", "ml",
  ])

  const indentClassName = View.viewIndentClass(indentProps)
  const className = clsx("mie list", ...indentClassName, _className)

  return <div className={className}>{children}</div>
}

List.displayName = "Mie.List"

export default Object.assign(List, {
  Item: ListItem,
})