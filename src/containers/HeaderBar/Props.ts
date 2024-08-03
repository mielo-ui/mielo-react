import { ReactNode } from "react"

import { HeaderProps } from "../../components"

export type HeaderBarAccent = boolean | "warning" | "error" | "success"

export type InnerHeaderProp =
  | ReactNode
  | Pick<HeaderProps, "title" | "subtitle" | "icon">

export interface InnerHeaderProps {
  header?: InnerHeaderProp
}

export interface HeaderBarProps {
  accent?: HeaderBarAccent
  className?: string

  transparent?: boolean
  bordered?: boolean

  header?: InnerHeaderProp
  right?: ReactNode
  left?: ReactNode

  controls?: ReactNode
}