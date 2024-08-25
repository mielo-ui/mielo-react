import { forwardRef } from "react"
import clsx from "clsx"

import { MessageContent } from "./Content"
import { MessageProps } from "./Props"

const Message = forwardRef<HTMLDivElement, MessageProps>(function Message(
  {
    description,
    attached,
    children,
    onClose,
    accent,
    marked,
    banner,
    color,
    title,
    size,
    icon,
    ...rest
  },
  ref,
) {
  const accentClassName = accent === true ? "accent" : accent

  const className = clsx(
    "mie message",
    accentClassName,
    color,
    size,
    {
      banner,
      marked,
    },
    attached && `attached attached-${attached}`,
  )

  const contentProps = {
    description,
    onClose,
    title,
    icon,
  }

  return (
    <div ref={ref} className={className} {...rest}>
      {children ? children : <MessageContent {...contentProps} />}
    </div>
  )
})

Message.displayName = "Mie.Message"

export default Object.assign(Message, {
  Content: MessageContent,
})