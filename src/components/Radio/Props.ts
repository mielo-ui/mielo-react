import { ReactNode } from "react"
import { CoreAccent, CoreColor, CoreSize } from "../../types"

type RadioInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface RadioProps extends RadioInput {
  size?: false | CoreSize
  accent?: CoreAccent
  color?: CoreColor | string

  children?: ReactNode
}
