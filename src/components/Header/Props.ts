import { HTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title">

export interface HeaderProps extends DivProps {
  icon?: JSX.Element
  subtitle?: ReactNode
  title?: ReactNode

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string

  iconSided?: boolean
  flattened?: boolean
  inverted?: boolean
  center?: boolean
}
