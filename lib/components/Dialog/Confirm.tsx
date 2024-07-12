import {
  useImperativeHandle,
  ForwardedRef,
  useCallback,
  forwardRef,
  useState,
} from "react"

import toPairs from "lodash.topairs"
import pick from "lodash.pick"

import Dialog, { DialogProps } from "./Dialog"
import { DialogAction } from "./Action"
import { Header } from "../Header"

export interface ConfirmAction<N = string> {
  accent?: boolean | "warning" | "error" | "success"
  label?: string
  name: N
}

export interface ConfirmResult {
  isCustomAction: boolean
  isConfirmed: boolean
  isCanceled: boolean
  isRejected: boolean

  action: string
}

export interface ConfirmMethods {
  confirm(): Promise<ConfirmResult>
}

export interface ConfirmProps {
  subtitle?: string
  title?: string

  accent?: boolean | "warning" | "error" | "success"
  size?: "small" | "large"
  theme?: "dark" | "light"

  // Default actions with labels - ok, cancel, reject
  actions?: Record<string, ConfirmAction>
  // Disable close modal on click overlay
  disableOverlayClose?: boolean
}

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

export const Confirm = forwardRef(function Confirm(
  {
    actions: _actions = DEFAULT_CONFIRM_ACTIONS,
    theme = "dark",
    subtitle,
    accent,
    title,
    size,
  }: ConfirmProps,
  ref: ForwardedRef<any>,
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
        <DialogAction
          onClick={onAction(action)}
          key={`action-${key}`}
          accent={accent}
          label={label}
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
    theme,
  }

  return (
    <Dialog {...dialogProps}>
      <Header
        attached="dialog"
        subtitle={subtitle}
        title={title}
        size={size}
        center
      />
    </Dialog>
  )
})
