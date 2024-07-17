import { ReactNode } from "react"

import { ProgressBar } from "./Bar"
import clsx from "clsx"

export interface ProgressProps {
  accent?: boolean | "warning" | "error" | "success"
  size?: "small" | "large"
  multiple?: boolean

  children?: ReactNode
}

function Progress({ multiple, children, accent, size }: ProgressProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  return (
    <div className={clsx("mie progress", accentClassName, size, { multiple })}>
      {children}
    </div>
  )
}

Progress.displayName = "Mie.Progress"

export default Object.assign(Progress, {
  Bar: ProgressBar,
})
