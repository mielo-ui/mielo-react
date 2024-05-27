import { Control, Controller, RegisterOptions } from "react-hook-form"
import { Option, Select } from "../Select"

export interface FormSelectProps {
  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >

  control: Control<any, any>
  placeholder: string
  disabled?: boolean
  compact?: boolean
  options: Option[]
  name: string
}

export function FormSelect({
  placeholder,
  options,
  disabled,
  control,
  rules,
  name,
}: FormSelectProps) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          placeholder={placeholder}
          error={error?.message}
          disabled={disabled}
          onChange={onChange}
          options={options}
          value={value}
          name={name}
        />
      )}
    />
  )
}

FormSelect.displayName = "Adw.Form.Select"