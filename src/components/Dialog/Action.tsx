import { ButtonProps, Button } from "../Button"

export interface DialogActionProps
  extends Pick<ButtonProps, "size" | "label" | "accent" | "icon" | "onClick"> {}

export function DialogAction(props: DialogActionProps) {
  return <Button {...props} transparent tertiary center />
}

DialogAction.displayName = "Mie.Dialog.Action"