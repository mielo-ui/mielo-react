import { ReactNode, useRef } from "react"
import { Modal } from "../Modal"

export interface DialogProps {
  onClose?: () => void
  isOpen?: boolean

  header?: ReactNode
  content?: ReactNode
  actions?: ReactNode
}

export function Dialog({
  header,
  content,
  actions,
  isOpen,
  onClose,
}: DialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="adw dialog">
        {header}
        {content}
        {actions}
      </div>
    </Modal>
  )
}

Dialog.displayName = "Adw.Dialog"