import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface CollapsibleProps extends DivProps {
  children?: ReactNode
  className?: string
  open?: boolean
}
