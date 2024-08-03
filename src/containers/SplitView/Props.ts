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
  headerbar?: FunctionComponent<{ scrollTop: number }>
  sidebar?: FunctionComponent<{ open?: boolean }>
  sidebarOpen?: boolean

  accent?: SplitViewAccent
  className?: string

  overlay?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
}
