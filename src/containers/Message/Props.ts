import { ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

export interface MessageProps {
  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  marked?: boolean
  banner?: boolean

  attached?: "headerbar"
  children?: ReactNode

  description?: ReactNode
  title?: ReactNode
  icon?: ReactNode

  onClose?: () => void
}

export interface MessageContentProps {
  description?: ReactNode
  title?: ReactNode
  icon?: ReactNode

  onClose?: () => void
}
