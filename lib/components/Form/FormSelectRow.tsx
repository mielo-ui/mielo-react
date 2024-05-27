import { FormSelect, FormSelectProps } from "./FormSelect"

export interface FormSelectRowProps extends FormSelectProps {}

export function FormSelectRow(props: FormSelectRowProps) {
  return (
    <div className="row select">
      <FormSelect {...props} />
    </div>
  )
}

FormSelectRow.displayName = "Adw.Form.Select.Row"
