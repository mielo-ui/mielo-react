import { Entry, EntryProps } from "../Entry"

export interface EntryRowProps extends EntryProps {}

export function EntryRow(props: EntryRowProps) {
  return (
    <div className="row entry">
      <Entry {...props} />
    </div>
  )
}

EntryRow.displayName = "Adw.Entry.Row"
