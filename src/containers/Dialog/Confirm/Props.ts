import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { HeaderProps } from "../../../components"
import { LayoutProps } from "../../../layout"

type DivProps = HTMLAttributes<HTMLDivElement>

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
  header?: LayoutProps<HeaderProps>
  children?: ReactNode

  accent?: ConfirmAccent
  size?: ConfirmSize

  // Default actions with labels - ok, cancel, reject
  actions?: Record<string, ConfirmAction>
  // Disable close modal on click overlay
  disableOverlayClose?: boolean
}
