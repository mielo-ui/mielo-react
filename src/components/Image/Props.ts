import { HTMLAttributes, ReactNode } from "react"

export type ImageAccent = true | "success" | "warning" | "error"

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
  size?: ImageSize

  transparent?: boolean
  container?: boolean
  circular?: boolean
  bordered?: boolean
  src?: string
}
