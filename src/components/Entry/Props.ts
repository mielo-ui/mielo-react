import { ReactNode } from "react"

export type EntryAccent = boolean | "warning" | "error" | "success"
export type EntryType = "text" | "password" | "number"
export type EntrySize = "small" | "large"

export interface EntryProps {
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  value?: string
  name: string
  id?: string

  accent?: EntryAccent
  type?: EntryType
  size?: EntrySize

  messageIcon?: JSX.Element
  message?: ReactNode
}