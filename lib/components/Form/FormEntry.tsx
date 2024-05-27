import { Control, Controller, RegisterOptions } from "react-hook-form"
import { Entry } from "../Entry"

export interface FormEntryProps {
  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >

  control: Control<any, any>
  type: "text" | "password" | "number"
  placeholder: string
  disabled?: boolean
  name: string
}

export function FormEntry({
  placeholder,
  disabled,
  control,
  rules,
  name,
  type,
}: FormEntryProps) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Entry
          placeholder={placeholder}
          error={error?.message}
          disabled={disabled}
          onChange={onChange}
          value={value}
          name={name}
          type={type}
        />
      )}
    />
  )
}

FormEntry.displayName = "Adw.Form.Entry"