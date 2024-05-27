import { CustomScroll } from "react-custom-scroll"
import { ReactNode, UIEvent } from "react"
import clsx from "clsx"

export interface ScrollbarProps {
  children?: ReactNode
  className?: string

  // CustomScroll Parent Properties
  onScroll?: (event: UIEvent) => void
  heightRelativeToParent?: string
  minScrollHandleHeight?: number
  allowOuterScroll?: boolean
  addScrolledClass?: boolean
  freezePosition?: boolean
  handleClass?: string
  flex?: string
  rtl?: boolean
  scrollTo?: number
  keepAtBottom?: boolean
}

export function Scrollbar({
  children,
  className,
  ...scrollbarProps
}: ScrollbarProps) {
  return (
    <CustomScroll
      className={clsx("adw scrollable-view", className)}
      {...scrollbarProps}
    >
      {children}
    </CustomScroll>
  )
}

Scrollbar.displayName = "Adw.Scrollbar"
