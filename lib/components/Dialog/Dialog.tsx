import { ReactNode } from "react"
import clsx from "clsx"

import { Modal } from "../Modal"

import { DialogAction } from "./Action"
import { DialogActions } from "./Actions"
import { DialogContent } from "./Content"

export interface DialogProps {
  onRequestClose?: () => void
  isOpen?: boolean

  theme?: "dark" | "light"
  attached?: "modal"

  children?: ReactNode
}

function Dialog({
  theme,
  attached,
  children,
  isOpen,
  onRequestClose,
}: DialogProps) {
  const attachedClassName = attached && `attached attached-${attached}`
  const className = clsx("adw dialog", attachedClassName)

  const content = (
    <div data-theme={theme || "light"} className={className}>
      {children}
    </div>
  )

  return attached !== "modal" ? (
    content
  ) : (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {content}
    </Modal>
  )
}

Dialog.displayName = "Adw.Dialog"

export default Object.assign(Dialog, {
  Content: DialogContent,
  Actions: DialogActions,
  Action: DialogAction,
})
