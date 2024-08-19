import { FunctionComponent } from "react"

export interface DropdownHandles {
  close(): void
  open(): void
}

export interface DropdownContentProps {
  isOpen: boolean
  close(): void
  open(): void
}

export interface DropdownProps {
  content: FunctionComponent<DropdownContentProps>
  menu: FunctionComponent<DropdownContentProps>
  menuHeight?: string | number

  onClose?: () => void
  onOpen?: () => void
  opened?: boolean

  className?: {
    container?: string
    content?: string
    menu?: string
  }

  props?: {
    container?: Record<string, any>
    content?: Record<string, any>
    menu?: Record<string, any>
  }
}