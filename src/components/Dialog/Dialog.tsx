import { ReactNode } from "react"
import clsx from "clsx"

import { DialogAction } from "./Action"
import { Modal } from "../Modal"

export interface DialogProps {
  onRequestClose?: () => void
  isOpen?: boolean

  accent?: boolean | "warning" | "error" | "success"
  size?: "small" | "large"

  theme?: "dark" | "light"
  attached?: "modal"

  children?: ReactNode
  actions?: ReactNode
}

function Dialog({
  onRequestClose,
  attached,
  children,
  actions,
  isOpen,
  accent,
  theme,
  size,
}: DialogProps) {
  const attachedClassName = attached && `attached attached-${attached}`
  const accentClassName = accent && accent === true ? "accent" : accent

  const className = clsx("mie dialog", size, accentClassName, attachedClassName)

  const content = (
    <div className={className}>
      <div className="content">{children}</div>
      {actions && <div className="mie buttons relaxed actions">{actions}</div>}
    </div>
  )

  return attached !== "modal" ? (
    content
  ) : (
    <Modal theme={theme} isOpen={isOpen} onRequestClose={onRequestClose}>
      {content}
    </Modal>
  )
}

Dialog.displayName = "Mie.Dialog"

export default Object.assign(Dialog, {
  Action: DialogAction,
})