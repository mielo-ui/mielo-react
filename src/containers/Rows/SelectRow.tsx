import { forwardRef } from "react"
import clsx from "clsx"

import { Select } from "../../components/Select"
import { SelectRowProps } from "./Props"

export const SelectRow = forwardRef<HTMLDivElement, SelectRowProps>(
  function SelectRow({ className, ...props }, ref) {
    return <Select ref={ref} className={clsx("row", className)} {...props} />
  },
)

SelectRow.displayName = "Mie.Select.Row"