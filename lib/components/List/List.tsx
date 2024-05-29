import { ReactNode } from "react"
import { ListItem } from "./Item"

export interface ListProps {
  children?: ReactNode
}

function List({ children }: ListProps) {
  return <div className="adw list">{children}</div>
}

List.displayName = "Adw.List"

export default Object.assign(List, {
  Item: ListItem,
})
