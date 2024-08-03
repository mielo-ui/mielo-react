import { forwardRef, ReactNode } from "react"
import clsx from "clsx"

import { SelectRow } from "./SelectRow"
import { EntryRow } from "./EntryRow"
import { RowsProps } from "./Props"
import { Row } from "./Row"

const Rows = forwardRef<HTMLDivElement, RowsProps>(function Rows(
  { className: _className, children, ...rest },
  ref,
) {
  const className = clsx("mie rows", _className)

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
})

Rows.displayName = "Mie.Rows"

export default Object.assign(Rows, {
  Select: SelectRow,
  Entry: EntryRow,
  Row: Row,
})