import { Tooltip as ReactTooltip } from "react-tooltip"
import clsx from "clsx"

import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react"

export interface TooltipProps {
  anchor: ReactElement<any, string | JSXElementConstructor<any>>
  children?: ReactNode
  className?: string
  id: string
}

export function Tooltip({ className, children, anchor, id }: TooltipProps) {
  return (
    <>
      {cloneElement(anchor, { id })}
      <ReactTooltip
        className={clsx("adw tooltip", className)}
        anchorSelect={`#${id}`}
      >
        <div className="content">{children}</div>
      </ReactTooltip>
    </>
  )
}
