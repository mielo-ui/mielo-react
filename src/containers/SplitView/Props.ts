import {
  MouseEventHandler,
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type SplitViewAccent = boolean | "warning" | "error" | "success"

export interface SplitViewProps extends DivProps {
  accent?: SplitViewAccent
  className?: string

  headerbar?: ReactNode
  children?: ReactNode
  sidebar?: ReactNode

  overlay?: MouseEventHandler<HTMLDivElement>
}
