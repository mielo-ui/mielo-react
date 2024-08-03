import { layoutElement } from "./builder"
import * as containers from "../containers"

export const Window = layoutElement(containers.Window, {
  spaceBetween: true,
})

export const View = layoutElement(containers.View, {
  spaceBetween: true,
})

export const HeaderBar = layoutElement(containers.HeaderBar, {
  flex: false,
})

export const Activatable = layoutElement(containers.Activatable, {
  spaceBetween: true,
})
export const Collapsible = layoutElement(containers.Collapsible, {
  spaceBetween: true,
})

export const MessageContent = layoutElement(containers.MessageContent, {
  spaceBetween: true,
})

export const Message = Object.assign(
  layoutElement(containers.Message, {
    spaceBetween: true,
  }),
  {
    Content: MessageContent,
  },
)

export const ListItem = layoutElement(containers.ListItem)
export const List = Object.assign(
  layoutElement(containers.List, {
    spaceBetween: true,
  }),
  {
    Item: ListItem,
  },
)

export const SelectRow = layoutElement(containers.SelectRow, {
  flex: false,
})
export const EntryRow = layoutElement(containers.EntryRow, {
  flex: false,
})
export const Row = layoutElement(containers.Row, { flex: false })

export const Rows = Object.assign(
  layoutElement(containers.Rows, { flex: false, spaceBetween: true }),
  {
    Select: SelectRow,
    Entry: EntryRow,
    Row: Row,
  },
)