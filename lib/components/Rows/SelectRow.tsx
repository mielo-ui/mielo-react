import { Select, SelectProps } from "../Select"

export interface SelectRowProps extends SelectProps {}

export function SelectRow(props: SelectRowProps) {
  return (
    <div className="row select">
      <Select {...props} />
    </div>
  )
}

SelectRow.displayName = "Adw.Select.Row"
