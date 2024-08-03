import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { ButtonProps } from "../../components/Button"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type DialogAccent = boolean | "warning" | "error" | "success"
export type DialogSize = "small" | "large"

export interface DialogActionProps
  extends Pick<ButtonProps, "size" | "label" | "accent" | "icon" | "onClick"> {}

export interface DialogProps extends DivProps {
  onRequestClose?: () => void
  isOpen?: boolean

  accent?: DialogAccent
  size?: DialogSize

  children?: ReactNode
  actions?: ReactNode
  attached?: "modal"
}