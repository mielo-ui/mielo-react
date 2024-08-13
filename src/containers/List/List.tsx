import { forwardRef } from "react"
import clsx from "clsx"

import { Item } from "../../components"
import { ListProps } from "./Props"

const List = forwardRef<HTMLDivElement, ListProps>(function List(
  { className: _className, children, ...rest },
  ref,
) {
  const className = clsx("mie list", _className)

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
})

List.displayName = "Mie.List"

export default Object.assign(List, {
  Item,
})