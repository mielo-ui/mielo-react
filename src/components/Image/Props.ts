import { HTMLAttributes, ReactNode } from "react"

export type ImageAccent = true | "success" | "warning" | "error"

export type ImageColor =
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

export type ImageSize =
  | "mini"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  className?: string

  accent?: ImageAccent
  color?: ImageColor
  size?: ImageSize

  transparent?: boolean
  container?: boolean
  circular?: boolean
  bordered?: boolean
  src?: string
}
