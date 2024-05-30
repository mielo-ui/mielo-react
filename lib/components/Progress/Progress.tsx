import { ReactNode } from "react"

import { ProgressBar } from "./Bar"
import clsx from "clsx"

export interface ProgressProps {
  multiple?: boolean
  size?: "small" | "big"

  children?: ReactNode
}

function Progress({ multiple, children, size }: ProgressProps) {
  return (
    <div className={clsx("adw progress", size, { multiple })}>
      {children}
    </div>
  )
}

Progress.displayName = "Adw.Progress"

export default Object.assign(Progress, {
  Bar: ProgressBar,
})
