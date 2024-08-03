import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { EntryProps, ItemProps, SelectProps } from "../../components"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface RowsProps extends DivProps {
  children: ReactNode
  className?: string
}

export interface RowProps extends ItemProps {
  className?: string
}

export interface SelectRowProps extends SelectProps {}
export interface EntryRowProps extends EntryProps {}