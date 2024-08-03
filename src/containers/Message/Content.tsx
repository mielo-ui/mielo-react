import * as Icons from "../../components/Icon/icons"

import { Button } from "../../components/Button"
import { Icon } from "../../components/Icon"

import { MessageContentProps } from "./Props"

export function MessageContent({
  description,
  onClose,
  title,
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