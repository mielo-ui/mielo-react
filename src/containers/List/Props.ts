import { HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface ListProps extends DivProps {
  children?: ReactNode
  className?: string
}
