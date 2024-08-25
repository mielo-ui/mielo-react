import { HTMLAttributes, ReactNode } from "react"

import { CoreAccent, CoreColor, CoreSize } from "../../types"
import { ButtonProps } from "../../components/Button"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface DialogActionProps
  extends Pick<ButtonProps, "size" | "label" | "accent" | "icon" | "onClick"> {}

export interface DialogProps extends DivProps {
  onRequestClose?: () => void
  isOpen?: boolean

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  className?: string
  children?: ReactNode
  actions?: ReactNode
  attached?: "modal"
}