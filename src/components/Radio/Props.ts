import { ChangeEventHandler, ReactNode } from "react"

export type RadioAccent = boolean | "warning" | "error" | "success"
export type RadioSize = "large" | "small"

export interface RadioProps {
  accent?: RadioAccent
  size?: RadioSize
  className?: string

  children?: ReactNode
  label?: ReactNode
  value?: string

  disabled?: boolean
  checked?: boolean
  name?: string

  onChange?: ChangeEventHandler<HTMLInputElement>
}
