import { Control, Controller, RegisterOptions } from "react-hook-form"
import clsx from "clsx"

interface FormToggleRowProps {
  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >

  control: Control<any, any>
  disabled?: boolean
  name: string

  subtitle?: string
  title?: string
}

export function FormToggleRow({
  title,
  subtitle,
  disabled,
  control,
  rules,
  name,
}: FormToggleRowProps) {
  const toggleId = `toggle_${name}`

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div
          className={clsx("row toggle", { error: !!error?.message, disabled })}
        >
          <div className="content">
            {title && <div className="title">{title}</div>}
            {subtitle && <div className="subtitle">{subtitle}</div>}
          </div>

          <div className="adw toggle">
            <input
              onChange={onChange}
              checked={value}
              className="input"
              id={toggleId}
              type="checkbox"
            />
            <label className="label" htmlFor={toggleId}></label>
          </div>
        </div>
      )}
    />
  )
}

FormToggleRow.displayName = "Adw.Form.Toggle.Row"
