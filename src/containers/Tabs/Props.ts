import { ReactNode } from "react"

import {
  LayoutRoundedProps,
  LayoutIndentProps,
  LayoutShadowProps,
} from "../../layout"

export type TabsAccent = boolean | "warning" | "error" | "success"

export interface RawTabsProps {
  children?: ReactNode
  accent?: TabsAccent
  className?: string
}

export interface TabBackgroundProps {
  height: number | string
  offset: number | string
  width: number | string
  accent?: TabsAccent
  className?: string
}

export interface TabOption {
  accent?: TabsAccent
  icon?: JSX.Element
  title: ReactNode
  name: string
}

export interface TabProps extends TabOption {
  onClick?: (event: any) => void
  className?: string

  transparent?: boolean
  selected: string
  index: number
}

export interface TabsProps
  extends LayoutIndentProps,
    LayoutRoundedProps,
    LayoutShadowProps {
  onChange?: (name: string) => void

  transparent?: boolean
  animated?: boolean

  className?: string
  accent?: TabsAccent

  tabs: TabOption[] | Record<string, TabOption>
  selected: string

  tabProps?: Omit<TabProps, "transparent" | "selected" | "index" | "onClick">
}

export interface TabsHandles {
  // @PASS
}

