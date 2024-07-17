import { ReactNode } from "react"
import { ListItem } from "./Item"

export interface ListProps {
  children?: ReactNode
}

function List({ children }: ListProps) {
  return <div className="mie list">{children}</div>
}

List.displayName = "Mie.List"

export default Object.assign(List, {
  Item: ListItem,
})
