import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type ActivatableAccent = boolean | "warning" | "error" | "success"

export interface ActivatableProps extends DivProps {
  accent?: ActivatableAccent
  children?: ReactNode
  active?: boolean
}
