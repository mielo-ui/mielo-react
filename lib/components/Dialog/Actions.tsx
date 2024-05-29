import { ReactNode } from "react"

export interface DialogActionsProps {
  children?: ReactNode
}

export function DialogActions(props: DialogActionsProps) {
  return <div className="adw buttons relaxed actions">{props.children}</div>
}

DialogActions.displayName = "Adw.Dialog.Actions"
