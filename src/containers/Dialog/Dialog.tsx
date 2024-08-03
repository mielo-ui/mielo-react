import { forwardRef } from "react"
import clsx from "clsx"

import { DialogAction } from "./Action"
import { DialogProps } from "./Props"
import { Modal } from "../Modal"

const Dialog = forwardRef<HTMLElement, DialogProps>(function Dialog({
  attached,
  children,
  actions,
  accent,
  size,
  ...rest
}) {
  const attachedClassName = attached && `attached attached-${attached}`
  const accentClassName = accent && accent === true ? "accent" : accent

  const className = clsx("mie dialog", size, accentClassName, attachedClassName)

  const content = (
    <div className={className}>
      <div className="content">{children}</div>
      {actions && <div className="mie buttons relaxed actions">{actions}</div>}
    </div>
  )

  return attached !== "modal" ? content : <Modal {...rest}>{content}</Modal>
})

Dialog.displayName = "Mie.Dialog"

export default Object.assign(Dialog, {
  Action: DialogAction,
})