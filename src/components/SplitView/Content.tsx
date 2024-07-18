import { ReactNode } from "react"

import { Scrollbar } from "../Scrollbar"

export interface SplitViewContentProps {
  children?: ReactNode
  headerbar?: ReactNode
}

export function SplitViewContent({
  children,
  headerbar,
}: SplitViewContentProps) {
  return (
    <div className="content">
      {headerbar}

      <Scrollbar>{children}</Scrollbar>
    </div>
  )
}

SplitViewContent.displayName = "Mie.SplitView.Content"