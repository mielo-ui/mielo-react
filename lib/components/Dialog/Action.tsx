import { ButtonProps, Button } from "../Button"

export interface DialogActionProps
  extends Pick<ButtonProps, "label" | "accent" | "icon" | "onClick"> {}

export function DialogAction(props: DialogActionProps) {
  return <Button {...props} transparent center />
}

DialogAction.displayName = "Adw.Dialog.Action"