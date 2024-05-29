import ReactSlider, { ReactRangeSliderProps } from "react-range-slider-input"
import { useCallback } from "react"
import clsx from "clsx"

export interface SliderProps
  extends Omit<
    ReactRangeSliderProps,
    "onChange" | "defaultValue" | "value" | "rangeSlideDisabled"
  > {
  onChange?: (newValue: number) => void
  defaultValue?: number
  value?: number
}

export function Slider({
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  ...props
}: SliderProps) {
  const className = clsx("adw slider", _className)

  const onChange = useCallback(([min, max]: number[]) => {
    _onChange?.(max)
  }, [])

  const defaultValue = !_defaultValue ? undefined : [0, _defaultValue]
  const value = !_value ? undefined : [0, _value]

  return (
    <div className={className}>
      <ReactSlider
        {...props}
        
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}

        defaultValue={defaultValue}
        onInput={onChange}
        value={value}
      />
    </div>
  )
}