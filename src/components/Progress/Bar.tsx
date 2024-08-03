import clsx from "clsx"

import { ProgressBarProps } from "./Props"
import { forwardRef } from "react"

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar(
    {
      className: _className,
      progressVisible,
      indeterminate,
      transparent,
      children,
      progress,
      accent,
    },
    ref,
  ) {
    const indeterminateClassName = indeterminate && `indeterminate ${indeterminate}`
    const accentClassName = accent && (accent === true ? "accent" : accent)

    const className = clsx(
      "mie progress-bar",
      indeterminateClassName,
      accentClassName,
      {
        transparent,
      },
      _className,
    )

    const barProps = {
      style: progress ? { width: `${progress}%` } : {},
      className,
      ref,
    }

    return (
      <div {...barProps}>
        {children ? (
          children
        ) : (
          <div className={clsx("label", { visible: progressVisible })}>
            {progress}%
          </div>
        )}
      </div>
    )
  },
)

ProgressBar.displayName = "Mie.Progress.Bar"