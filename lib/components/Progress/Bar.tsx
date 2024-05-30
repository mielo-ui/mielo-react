import { ReactNode } from "react"
import clsx from "clsx"

export interface ProgressBarProps {
  indeterminate?: "pulsating" | "filling" | "sliding" | "swinging"
  accent?: "red" | "purple" | "green" | "blue" | "yellow",

  progressVisible?: boolean
  progress: number

  children?: ReactNode
}

export function ProgressBar({
  progressVisible,
  indeterminate,
  children,
  progress,
  accent,
}: ProgressBarProps) {
  return (
    <div
      style={{ width: `${progress}%` }}
      className={clsx(
        "bar",
        indeterminate && `indeterminate ${indeterminate}`,
        accent && `accent ${accent}`,
      )}
    >
      {children ? (
        children
      ) : (
        <div className={clsx("progress", { visible: progressVisible })}>
          {progress}%
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = "Adw.Progress.Bar"
