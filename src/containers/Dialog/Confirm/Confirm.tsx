import { useImperativeHandle, useCallback, forwardRef, useState } from "react"

import toPairs from "lodash.topairs"
import pick from "lodash.pick"

import { Header } from "../../../components/Header"
import { Dialog } from "../Dialog"

import { ConfirmAction, ConfirmHandles, ConfirmProps, ConfirmResult } from "./Props"
import { DialogProps } from "../Props"
import * as L from "../../../layout"

const CONFIRM_ACTIONS: Record<string, ConfirmAction> = {
  reject: {
    accent: "error",
    label: "Reject",
    name: "reject",
  },
  cancel: {
    label: "Cancel",
    name: "cancel",
  },
  confirm: {
    accent: true,
    label: "Confirm",
    name: "confirm",
  },
}

const DEFAULT_CONFIRM_ACTIONS = pick(CONFIRM_ACTIONS, ["confirm", "cancel"])

export const Confirm = forwardRef<ConfirmHandles, ConfirmProps>(function Confirm(
  {
    actions: _actions = DEFAULT_CONFIRM_ACTIONS,
    children,
    header,
    accent,
    size,
    ...rest
  },
  ref,
) {
  const [promise, setPromise] = useState<any>(null)

  // Trigger with show modals, after click action
  const confirm = useCallback(
    () =>
      new Promise<ConfirmResult>(resolve => {
        setPromise({ resolve })
      }),
    [],
  )

  useImperativeHandle(ref, () => ({
    confirm,
  }))

  const onCancel = useCallback(() => {
    setPromise(null)

    promise?.resolve?.({
      isCustomAction: false,
      isConfirmed: false,
      isRejected: false,
      isCanceled: true,
      action: "cancel",
    })
  }, [promise])

  const onAction = useCallback(
    (action: string) => () => {
      setPromise(null)

      promise?.resolve?.({
        isCustomAction: true,
        isConfirmed: false,
        isRejected: false,
        isCanceled: false,
        action,
      })
    },
    [promise],
  )

  const actions = toPairs(_actions).map(
    ([key, { label: _label, name: action, accent }]) => {
      const label = _label || CONFIRM_ACTIONS?.[action]?.label

      return (
        <L.Button
          onClick={onAction(action)}
          key={`action-${key}`}
          accent={accent}
          label={label}
          pv="small"
          transparent
        />
      )
    },
  )

  const dialogProps: DialogProps = {
    onRequestClose: onCancel,
    isOpen: promise !== null,
    attached: "modal",
    actions,
    accent,
    ...rest,
  }

  return (
    <Dialog {...dialogProps}>
      {header && <L.Header {...header} />}
      {children}
    </Dialog>
  )
})
