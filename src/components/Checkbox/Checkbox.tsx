import clsx from "clsx"

import {
  ChangeEventHandler,
  useCallback,
  forwardRef,
  useEffect,
  useState,
} from "react"

import { EmblemOk } from "../Icon/icons/EmblemOk"
import { CheckboxProps } from "./Props"

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    className: _className,
    onChange: _onChange,
    checked: _checked,
    icon: _icon,
    children,
    circular,
    disabled,
    toggle,
    accent,
    color,
    size,
    label,
    name,
  }: CheckboxProps,
  ref,
) {
  const [checked, setChecked] = useState(_checked)

  const accentClassName = accent && (accent === true ? "accent" : accent)

  useEffect(() => {
    setChecked(_checked)
  }, [_checked])

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    setChecked(event.target.checked)
    _onChange?.(event)
  }, [])

  const toggleId = `toggle_${name}`
  let indicatorIcon

  if (toggle) {
    indicatorIcon = checked ? _icon?.indicator?.checked : _icon?.indicator?.unchecked
  } else {
    indicatorIcon = <EmblemOk />
  }

  const className = clsx(
    "mie",
    toggle ? "toggle" : "checkbox",
    accentClassName,
    color,
    size,
    {
      disabled,
      circular,
    },
    _className,
  )

  return (
    <div className={className}>
      <input
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        className="input"
        id={toggleId}
        type="checkbox"
        ref={ref}
      />

      <label className="label" htmlFor={toggleId}>
        <div className={clsx("indicator", { checked })}>
          {toggle ? (
            <>
              <div className="dot">
                <div className="icon">{indicatorIcon}</div>
              </div>

              {_icon?.layout && (
                <div className="icon layout">
                  <div className="checked">{_icon?.layout?.checked}</div>
                  <div className="unchecked">{_icon?.layout?.unchecked}</div>
                </div>
              )}
            </>
          ) : (
            <div className="icon">{indicatorIcon}</div>
          )}
        </div>

        {(children || label) && (
          <div className="content">{children ? children : label}</div>
        )}
      </label>
    </div>
  )
})

Checkbox.displayName = "Mie.Checkbox"