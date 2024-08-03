import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { ItemProps } from "../../components/Item"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface ListItemProps extends ItemProps {}

export interface ListProps extends DivProps {
  children?: ReactNode
  className?: string
}
