import { ReactNode } from "react"
import clsx from "clsx"

import { Scrollbar } from "../../Scrollbar"

export interface SplitViewSidebarProps {
  headerbar?: ReactNode
  children?: ReactNode
  opened?: boolean
}

export function SplitViewSidebar({
  children,
  headerbar,
  opened,
}: SplitViewSidebarProps) {
  return (
    <div className={clsx("sidebar", { opened })}>
      {headerbar && headerbar}

      <Scrollbar heightRelativeToParent="100%">{children}</Scrollbar>
    </div>
  )
}

SplitViewSidebar.displayName = "Adw.SplitView.Sidebar"