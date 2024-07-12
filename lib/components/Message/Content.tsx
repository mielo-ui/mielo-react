import { ReactNode } from "react"

import { WindowClose } from "../Icons/icons/WindowClose"
import { Button } from "../Button"
import { Icon } from "../Icons"

export interface MessageContentProps {
  title?: string | ReactNode
  description?: string | ReactNode
  icon?: ReactNode

  onClose?: () => void
}

export function MessageContent({
  title,
  description,
  onClose,
  icon,
}: MessageContentProps) {
  return (
    <>
      {icon && <div className="icon">{icon}</div>}

      <div className="content">
        {title && <div className="title">{title}</div>}
        {description && <div className="description">{description}</div>}
      </div>

      <Button
        icon={<Icon icon={<WindowClose />} />}
        onClick={onClose}
        className="close"
        size="small"
        transparent
        circular
      />
    </>
  )
}