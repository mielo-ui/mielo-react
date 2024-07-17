import { ReactNode } from "react"

import { filterChildrenByType } from "../../utils"
import { SplitViewContent } from "./Content"
import { SplitViewSidebar } from "./Sidebar"

export interface SplitViewProps {
  theme?: "light" | "dark" | string
  children?: ReactNode
}

function SplitView({ children, theme }: SplitViewProps) {
  return (
    <div data-theme={theme || "light"} className="adw split-view">
      {filterChildrenByType(children, [
        "Adw.SplitView.Sidebar",
        "Adw.SplitView.Content",
      ])}
    </div>
  )
}

SplitView.displayName = "Adw.SplitView"

export default Object.assign(SplitView, {
  Content: SplitViewContent,
  Sidebar: SplitViewSidebar,
})
