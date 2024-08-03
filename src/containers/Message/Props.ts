import { ReactNode } from "react"

export type MessageSize = "tiny" | "small" | "large" | "big" | "huge" | "massive"
export type MessageAccent = boolean | "warning" | "error" | "success"

export interface MessageProps {
  accent?: MessageAccent
  size?: MessageSize
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
