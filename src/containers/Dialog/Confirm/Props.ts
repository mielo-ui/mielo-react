import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type ConfirmAccent = boolean | "warning" | "error" | "success"
export type ConfirmSize = "small" | "large"

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

export interface ConfirmHandles {
  confirm(): Promise<ConfirmResult>
}

export interface ConfirmProps extends DivProps {
  subtitle?: string
  title?: string

  accent?: ConfirmAccent
  size?: ConfirmSize

  // Default actions with labels - ok, cancel, reject
  actions?: Record<string, ConfirmAction>
  // Disable close modal on click overlay
  disableOverlayClose?: boolean
}
