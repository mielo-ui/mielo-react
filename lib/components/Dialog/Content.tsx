import { ReactNode } from "react"

export interface DialogContentProps {
  children?: ReactNode
}

export function DialogContent(props: DialogContentProps) {
  return <div className="content">{props.children}</div>
}

DialogContent.displayName = "Adw.Dialog.Content"
