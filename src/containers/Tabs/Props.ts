import { ReactNode } from "react"

import { CoreAccent, CoreColor } from "../../types"

import {
  LayoutRoundedProps,
  LayoutIndentProps,
  LayoutShadowProps,
} from "../../layout"

export interface RawTabsProps {
  children?: ReactNode
  accent?: CoreAccent
  color?: CoreColor | string
  className?: string
}

export interface TabBackgroundProps
  extends LayoutIndentProps,
    LayoutRoundedProps,
    LayoutShadowProps {
  height: number | string
  offset: number | string
  width: number | string
  accent?: CoreAccent
  color?: CoreColor | string
  className?: string
}

export interface TabOption {
  accent?: CoreAccent
  color?: CoreColor | string
  icon?: JSX.Element
  title: ReactNode
  name: string
}

export interface TabProps
  extends TabOption,
    LayoutIndentProps,
    LayoutRoundedProps,
    LayoutShadowProps {
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
  accent?: CoreAccent
  color?: CoreColor | string

  tabs: TabOption[] | Record<string, TabOption>
  selected: string

  tabProps?: Omit<TabProps, "transparent" | "selected" | "index" | "onClick">
}

export interface TabsHandles {
  // @PASS
}

