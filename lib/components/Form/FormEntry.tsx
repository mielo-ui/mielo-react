import { Control, Controller, RegisterOptions } from "react-hook-form"
import { Entry, EntryProps } from "../Entry"

type AllowedEntryProps = Omit<
  EntryProps,
  "onChange" | "value" | "accent" | "messageIcon" | "message"
>

export interface FormEntryProps extends AllowedEntryProps {
  control: Control<any, any>

  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >
}

export function FormEntry({ control, rules, name, ...props }: FormEntryProps) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const entryProps = {
          onChange: onChange,
          value: value,
          name: name,
          ...props,
        }

        if (error) {
          Object.assign(entryProps, {
            accent: "error",
            message: error,
          })
        }

        return <Entry {...entryProps} />
      }}
    />
  )
}

FormEntry.displayName = "Adw.Form.Entry"