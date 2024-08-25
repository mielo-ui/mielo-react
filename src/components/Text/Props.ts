import { HTMLAttributes } from "react"
import { ReactNode } from "react"

import { CoreAccent, CoreColor, CoreSize } from "../../types"

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "title" | "content">

export interface TextProps extends DivProps {
  className?: string

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  muted?: boolean
  invert?: boolean

  fsemibold?: boolean
  fregular?: boolean
  flight?: boolean
  fbold?: boolean

  element?: "div" | "p" | "a"
  children?: ReactNode
  center?: boolean
}