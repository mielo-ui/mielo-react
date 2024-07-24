import clsx from "clsx"

import { Entry, EntryProps } from "../../components/Entry"

export interface EntryRowProps extends EntryProps {}

export function EntryRow({ className, ...props }: EntryRowProps) {
  return <Entry className={clsx("row", className)} {...props} />
}

EntryRow.displayName = "Mie.Entry.Row"