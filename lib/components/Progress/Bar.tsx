import { ReactNode } from "react"
import clsx from "clsx"

export interface ProgressBarProps {
  indeterminate?: "pulsating" | "filling" | "sliding" | "swinging"
  accent?: boolean | "warning" | "error" | "success"

  progressVisible?: boolean
  progress?: number
  transparent?: boolean

  children?: ReactNode
}

export function ProgressBar({
  progressVisible,
  indeterminate,
  transparent,
  children,
  progress,
  accent,
}: ProgressBarProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const indeterminateClassName =
    indeterminate && `indeterminate ${indeterminate}`

  return (
    <div
      style={progress ? { width: `${progress}%` } : {}}
      className={clsx(
        "mie progress-bar",
        indeterminateClassName,
        accentClassName,
        { transparent },
      )}
    >
      {children ? (
        children
      ) : (
        <div className={clsx("label", { visible: progressVisible })}>
          {progress}%
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = "Mie.Progress.Bar"
