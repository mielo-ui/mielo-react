import { ReactNode } from "react"

export type RadioAccent = boolean | "warning" | "error" | "success"
export type RadioSize = "large" | "small"

export type RadioColor =
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "brown"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"
  | "light"
  | "dark"

type RadioInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface RadioProps extends RadioInput {
  accent?: RadioAccent
  color?: RadioColor

  children?: ReactNode
  size?: RadioSize
}
