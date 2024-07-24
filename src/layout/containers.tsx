import { layoutElement } from "./builder"
import * as containers from "../containers"

export const View = layoutElement(containers.View)

export const HeaderBar = layoutElement(containers.HeaderBar, {
  flex: false,
})
export const Scrollbar = layoutElement(containers.Scrollbar, {
  flex: false,
})

export const ListItem = layoutElement(containers.ListItem)
export const List = Object.assign(layoutElement(containers.List), {
  Item: ListItem,
})

export const SelectRow = layoutElement(containers.SelectRow, {
  flex: false,
})
export const EntryRow = layoutElement(containers.EntryRow, {
  flex: false,
})
export const Row = layoutElement(containers.Row, { flex: false })

export const Rows = Object.assign(
  layoutElement(containers.Rows, { flex: false }),
  {
    Select: SelectRow,
    Entry: EntryRow,
    Row: Row,
  },
)