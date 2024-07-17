declare module "react-range-slider-input" {
  export interface ReactRangeSliderProps {
    className?: string
    id?: string

    step?: number | string
    min: number
    max: number

    defaultValue?: number[]
    value?: number[]

    onInput?: (value: number[]) => void

    onThumbDragStart?: () => void
    onRangeDragStart?: () => void
    onRangeDragEnd?: () => void
    onThumbDragEnd?: () => void

    rangeSlideDisabled?: boolean
    thumbsDisabled?: boolean[]
    disabled?: boolean

    orientation?: "horizontal" | "vertical"
  }

  export default React.Component<ReactRangeSliderProps, any>
}