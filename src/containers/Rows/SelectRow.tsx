import clsx from "clsx"

import { Select, SelectProps } from "../../components/Select"

export interface SelectRowProps extends SelectProps {}

export function SelectRow({ className, ...props }: SelectRowProps) {
  return <Select className={clsx("row", className)} {...props} />
}

SelectRow.displayName = "Mie.Select.Row"