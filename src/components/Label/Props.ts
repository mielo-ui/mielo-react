import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>
export type LabelAccent = boolean | "warning" | "error" | "success"
export type LabelFloating = boolean | "ftl" | "ftr" | "fbl" | "fbr"

export type LabelSize =
  | "medium"
  | "tiny"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface LabelProps extends DivProps {
  floating?: LabelFloating
  accent?: LabelAccent
  size?: LabelSize

  children?: ReactNode

  transparent?: boolean
  circular?: boolean
  bordered?: boolean
}