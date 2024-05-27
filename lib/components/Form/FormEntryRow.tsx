import { FormEntry, FormEntryProps } from "./FormEntry"

export interface FormEntryRowProps extends FormEntryProps {}

export function FormEntryRow(props: FormEntryRowProps) {
  return (
    <div className="row entry">
      <FormEntry {...props} />
    </div>
  )
}

FormEntryRow.displayName = "Adw.Form.Entry.Row"
