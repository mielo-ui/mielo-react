import { ReactNode } from "react"
import clsx from "clsx"

import { SelectRow } from "./SelectRow"
import { EntryRow } from "./EntryRow"
import { Row } from "./Row"

export interface RowsProps {
  children: ReactNode
  className?: string
}

function Rows({ className: _className, children }: RowsProps) {
  const className = clsx("mie rows", _className)

  return <div className={className}>{children}</div>
}

Rows.displayName = "Mie.Rows"

export default Object.assign(Rows, {
  Select: SelectRow,
  Entry: EntryRow,
  Row: Row,
})