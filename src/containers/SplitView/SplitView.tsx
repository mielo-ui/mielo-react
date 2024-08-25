import { forwardRef } from "react"
import clsx from "clsx"

import { SplitViewProps } from "./Props"
import { Sidebar } from "../Sidebar"

const SplitView = forwardRef<HTMLDivElement, SplitViewProps>(function SplitView(
  {
    className: _className,
    contentClassName,
    headerbar,
    children,
    sidebar,
    overlay,
    accent,
    color,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const className = clsx("mie splitview", accentClassName, color, _className)

  return (
    <div ref={ref} {...rest} className={className}>
      {sidebar}
      {overlay && <div onClick={overlay} className="overlay" />}

      <div className="container">
        {headerbar}
        <div className={clsx("content", contentClassName)}>{children}</div>
      </div>
    </div>
  )
})

SplitView.displayName = "Mie.SplitView"

export default Object.assign(SplitView, {
  Sidebar,
})