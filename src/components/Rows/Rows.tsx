import { ReactNode } from "react"
import { filterChildrenByType } from "../../utils"

import { SelectRow } from "./SelectRow"
import { EntryRow } from "./EntryRow"
import { Row } from "./Row"

export interface RowsProps {
  children: ReactNode
}

function Rows({ children }: RowsProps) {
  return <div className="mie rows">{children}</div>
}

Rows.displayName = "Mie.Rows"

export default Object.assign(Rows, {
  Select: SelectRow,
  Entry: EntryRow,
  Row: Row,
})