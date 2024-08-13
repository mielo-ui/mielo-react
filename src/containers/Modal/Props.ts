import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface ModalProps extends DivProps {
  onRequestClose?: () => void
  children?: ReactNode
  isOpen?: boolean
}

export interface PortalProps {
  onRequestClose?: () => void
  children: React.ReactNode
  isOpen?: boolean
}
