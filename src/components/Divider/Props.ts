import { HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface DividerProps extends DivProps {
  children?: ReactNode
}
