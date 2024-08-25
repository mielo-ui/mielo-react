import { layoutElement } from "./builder"

import * as containers from "../containers"
import { Item } from "./components"

export const Window = layoutElement(containers.Window, {
  spaceBetween: true,
  gap: true,
})

export const View = layoutElement(containers.View, {
  spaceBetween: true,
  gap: true,
})

export const Dialog = layoutElement(containers.Dialog, {
  spaceBetween: true,
  gap: true,
})

export const HeaderBar = layoutElement(containers.HeaderBar, {
  flex: false,
})

export const Activatable = layoutElement(containers.Activatable, {
  spaceBetween: true,
  gap: true,
})

export const Collapsible = layoutElement(containers.Collapsible, {
  spaceBetween: true,
  gap: true,
})

export const MessageContent = layoutElement(containers.MessageContent, {
  spaceBetween: true,
  gap: true,
})

export const Message = Object.assign(
  layoutElement(containers.Message, {
    spaceBetween: true,
    gap: true,
  }),
  {
    Content: MessageContent,
  },
)

export const List = Object.assign(
  layoutElement(containers.List, {
    spaceBetween: true,
    gap: true,
  }),
  {
    Item: Item,
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
  layoutElement(containers.Rows, { flex: false, spaceBetween: true, gap: true }),
  {
    Select: SelectRow,
    Entry: EntryRow,
    Row: Row,
  },
)