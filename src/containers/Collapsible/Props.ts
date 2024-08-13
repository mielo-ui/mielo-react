import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface CollapsibleProps extends DivProps {
  children?: ReactNode
  className?: string
  open?: boolean
}
