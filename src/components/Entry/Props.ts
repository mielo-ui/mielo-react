import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

export interface EntryCustomProps {
  postfix?: ReactNode
  prefix?: ReactNode
}

type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "prefix" | "postfix" | "size" | "accent"
>

export interface EntryProps extends InputProps, EntryCustomProps {
  // Container id need for root wrapper (#id.mie.entry)
  containerId?: string

  // Label is text message moved to top on focus or filled.
  label?: string
  // Entry value
  value?: string

  transparent?: boolean
  bordered?: boolean

  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string
}
