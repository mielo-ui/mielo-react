// Its wrapper around library
// https://github.com/n3r4zzurr0/react-range-slider-input

import Slider, { ReactRangeSliderProps } from "react-range-slider-input"
import { useCallback } from "react"
import clsx from "clsx"

export interface RangeSliderValue {
  min: number
  max: number
}

export interface RangeSliderProps extends Omit<ReactRangeSliderProps, "onChange" | "defaultValue" | "value"> {
  onChange?: (newValue: RangeSliderValue) => void
  defaultValue?: RangeSliderValue 
  value?: RangeSliderValue
}

export function RangeSlider({
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  ...props
}: RangeSliderProps) {
  const className = clsx("mie slider range", _className)

  const onChange = useCallback(([ min, max ]: number[]) => {
    _onChange?.({ min, max })
  }, [])

  const defaultValue = !_defaultValue ? undefined : [_defaultValue.min, _defaultValue.max]
  const value = !_value ? undefined : [_value.min, _value.max]

  return (
    <div className={className}>
      <Slider
        className="wrapped"
        defaultValue={defaultValue}
        onInput={onChange}
        value={value}
        {...props}
      />
    </div>
  )
}

RangeSlider.displayName = "Mie.Slider.Range"