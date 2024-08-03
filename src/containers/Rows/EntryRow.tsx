import { forwardRef } from "react"
import clsx from "clsx"

import { Entry } from "../../components/Entry"
import { EntryRowProps } from "./Props"

export const EntryRow = forwardRef<HTMLInputElement, EntryRowProps>(function EntryRow(
  { className, ...props },
  ref,
) {
  return <Entry ref={ref} className={clsx("row", className)} {...props} />
})

EntryRow.displayName = "Mie.Entry.Row"