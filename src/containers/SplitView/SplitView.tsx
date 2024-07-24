import { ReactNode } from "react"

import { SplitViewContent } from "./Content"
import { SplitViewSidebar } from "./Sidebar"

export interface SplitViewProps {
  theme?: "light" | "dark" | string
  children?: ReactNode
}

function SplitView({ children, theme }: SplitViewProps) {
  return (
    <div data-theme={theme || "light"} className="mie split-view">
      {children}
    </div>
  )
}

SplitView.displayName = "Mie.SplitView"

export default Object.assign(SplitView, {
  Content: SplitViewContent,
  Sidebar: SplitViewSidebar,
})