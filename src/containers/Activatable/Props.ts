import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

export type ActivatableAccent = boolean | "warning" | "error" | "success"

export interface ActivatableProps extends DivProps {
  accent?: ActivatableAccent
  children?: ReactNode
  active?: boolean
}
