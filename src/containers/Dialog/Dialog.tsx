import { forwardRef } from "react"
import clsx from "clsx"

import { DialogProps } from "./Props"
import { Modal } from "../Modal"

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    className: _className,
    onRequestClose,
    attached,
    children,
    actions,
    accent,
    isOpen,
    color,
    size,
    ...rest
  },
  ref,
) {
  const attachedClassName = attached && `attached attached-${attached}`
  const accentClassName = accent && accent === true ? "accent" : accent

  const className = clsx(
    "mie dialog",
    size,
    accentClassName,
    color,
    _className,
    attachedClassName,
  )

  const content = (
    <div className={className} {...rest}>
      <div className="content">{children}</div>
      {actions && <div className="mie buttons relaxed actions">{actions}</div>}
    </div>
  )

  return attached !== "modal" ? (
    content
  ) : (
    <Modal ref={ref} isOpen={isOpen} onRequestClose={onRequestClose}>
      {content}
    </Modal>
  )
})

Dialog.displayName = "Mie.Dialog"