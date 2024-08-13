import { DetailedHTMLProps, HTMLAttributes, ReactNode, MouseEvent } from "react"
import { HeaderBarProps } from "../HeaderBar"
import { SplitViewProps } from "../SplitView"

type DivProps = HTMLAttributes<HTMLDivElement>
export type WindowAccent = boolean | "warning" | "error" | "success"

export interface WindowProps extends DivProps {
  accent?: WindowAccent
  headerbar?: HeaderBarProps
  split?: SplitViewProps
  children?: ReactNode
  transparent?: boolean
}

export type WindowControlType = "maximize" | "minimize" | "restore" | "close"
export type WindowControlIcons = Partial<Record<WindowControlType, ReactNode>>

type OnClickControl = (
  event: MouseEvent<HTMLButtonElement>,
  controlType: WindowControlType,
) => void

export interface WindowControlsProps extends DivProps {
  onClickControl?: OnClickControl

  controls: WindowControlType[]
  icons?: WindowControlIcons
  className?: string
}