import { ReactNode } from "react"
import clsx from "clsx"

import { MessageContent } from "./Content"

export interface MessageProps {
  size?: "tiny" | "small" | "large" | "big" | "huge" | "massive"
  accent?: boolean | "warning" | "error" | "success"
  marked?: boolean
  banner?: boolean

  attached?: "headerbar"
  children?: ReactNode

  title?: string | ReactNode
  description?: string | ReactNode
  icon?: ReactNode

  onClose?: () => void
}

function Message({
  accent,
  marked,
  banner,
  attached,
  onClose,
  title,
  description,
  size,
  icon,
  children,
}: MessageProps) {
  const accentClassName = accent === true ? "accent" : accent

  const className = clsx(
    "mie message",
    accentClassName,
    size,
    {
      banner,
      marked,
    },
    attached && `attached attached-${attached}`,
  )

  const contentProps = {
    description,
    title,
    icon,
    onClose,
  }

  return (
    <div className={className}>
      {children ? children : <MessageContent {...contentProps} />}
    </div>
  )
}

Message.displayName = "Mie.Message"

export default Object.assign(Message, {
  Content: MessageContent,
})
