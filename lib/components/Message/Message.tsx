import { ReactNode } from "react"
import clsx from "clsx"

import { MessageContent } from "./Content"

export interface MessageProps {
  accent?: "red" | "purple" | "green" | "blue" | "yellow"
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
  icon,
  children,
}: MessageProps) {
  const className = clsx(
    "adw message",
    attached && `attached attached-${attached}`,
    {
      banner,
      accent,
      marked,
    },
  )

  const contentProps = {
    description,
    title,
    icon,
    onClose,
  }

  return <div className={className}>
    {children ? children : <MessageContent {...contentProps} />}
  </div>
}

Message.displayName = "Adw.Message"

export default Object.assign(Message, {
  Content: MessageContent,
})
