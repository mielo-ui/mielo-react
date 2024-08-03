import { forwardRef } from "react"
import clsx from "clsx"

import { HeaderBar } from "../HeaderBar"
import { SplitView } from "../SplitView"

import { WindowControls } from "./WindowControls"
import { WindowProps } from "./Props"

const Window = forwardRef<HTMLDivElement, WindowProps>(function Window(
  { className: _className, transparent, children, headerbar, split, accent, ...rest },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const className = clsx("mie window", accentClassName, { transparent }, _className)

  return (
    <div ref={ref} {...rest} className={className}>
      {split ? (
        <SplitView {...split}>{children}</SplitView>
      ) : (
        <>
          {headerbar && <HeaderBar {...headerbar} />}
          {children}
        </>
      )}
    </div>
  )
})

Window.displayName = "Mie.Window"

export default Object.assign(Window, {
  Controls: WindowControls,
})