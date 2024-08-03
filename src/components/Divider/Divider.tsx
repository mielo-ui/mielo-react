import clsx from "clsx"

import { DividerProps } from "./Props"

export function Divider({ className, children }: DividerProps) {
  return (
    <div className={clsx("mie divider", { content: !!children }, className)}>
      {children}
    </div>
  )
}

Divider.displayName = "Mie.Divider"