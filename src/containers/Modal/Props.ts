import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

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
