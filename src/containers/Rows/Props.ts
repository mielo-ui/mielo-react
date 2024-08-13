import { HTMLAttributes, ReactNode } from "react"
import { EntryProps, ItemProps, SelectProps } from "../../components"

type DivProps = HTMLAttributes<HTMLDivElement>

export interface RowsProps extends DivProps {
  children: ReactNode
  className?: string
}

export interface RowProps<E = HTMLDivElement> extends ItemProps<E> {
  className?: string
}

export interface SelectRowProps extends SelectProps {}
export interface EntryRowProps extends EntryProps {}