import { forwardRef } from "react"
import clsx from "clsx"

import { ProgressProps } from "./Props"
import { ProgressBar } from "./Bar"

const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { className: _className, multiple, children, accent, size },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const className = clsx(
    "mie progress",
    accentClassName,
    size,
    { multiple },
    _className,
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
})

Progress.displayName = "Mie.Progress"

export default Object.assign(Progress, {
  Bar: ProgressBar,
})