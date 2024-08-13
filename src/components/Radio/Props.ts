import { ReactNode } from "react"

export type RadioAccent = boolean | "warning" | "error" | "success"
export type RadioSize = "large" | "small"

type RadioInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface RadioProps extends RadioInput {
  accent?: RadioAccent
  size?: RadioSize

  children?: ReactNode
}
