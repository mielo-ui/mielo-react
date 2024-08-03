import { forwardRef } from "react"

import { Button } from "../../components/Button"
import { DialogActionProps } from "./Props"

export const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction(props, ref) {
    return <Button ref={ref} {...props} transparent tertiary center />
  },
)

DialogAction.displayName = "Mie.Dialog.Action"