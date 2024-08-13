import { ReactNode } from "react"

export type HeaderBarAccent = boolean | "warning" | "error" | "success"

export interface HeaderBarProps {
  accent?: HeaderBarAccent
  className?: string

  transparent?: boolean
  bordered?: boolean

  header?: ReactNode
  right?: ReactNode
  left?: ReactNode

  controls?: ReactNode
}