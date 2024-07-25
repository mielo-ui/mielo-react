import { ReactNode } from "react"

import * as Icons from "../../components/Icons/icons"
import { Button } from "../../components/Button"
import { Icon } from "../../components/Icons"

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
        icon={<Icon icon={<Icons.Window.Close />} />}
        onClick={onClose}
        className="close"
        size="small"
        transparent
        circular
      />
    </>
  )
}