import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = HTMLAttributes<HTMLDivElement>
export type LabelFloating = boolean | "ftl" | "ftr" | "fbl" | "fbr"

export interface LabelProps extends DivProps {
  floating?: LabelFloating

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  children?: ReactNode

  transparent?: boolean
  circular?: boolean
  bordered?: boolean
}