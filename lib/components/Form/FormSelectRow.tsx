import { FormSelect, FormSelectProps } from "./FormSelect"

export interface FormSelectRowProps extends FormSelectProps {}

export function FormSelectRow(props: FormSelectRowProps) {
  return (
    <div className="row select">
      <FormSelect {...props} />
    </div>
  )
}

FormSelectRow.displayName = "Mie.Form.Select.Row"
