import {
  ChangeEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react"

import clsx from "clsx"

import { EmblemOk } from "../Icons/icons/EmblemOk"

export interface CheckboxIndicatorIcon {
  indicator?: {
    unchecked?: ReactNode
    checked?: ReactNode
  }
  layout?: {
    unchecked?: ReactNode
    checked?: ReactNode
  }
}

export interface LayoutIconProps {
  unchecked?: ReactNode
  checked?: ReactNode
}

export interface CheckboxProps {
  accent?: "warning" | "error" | "success"
  size?: "large" | "small"
  className?: string

  icon?: CheckboxIndicatorIcon
  cicrular?: boolean
  toggle?: boolean

  children?: string | ReactNode
  label?: string | ReactNode

  disabled?: boolean
  checked?: boolean
  name?: string

  onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Checkbox({
  className: _className,
  onChange: _onChange,
  checked: _checked,
  icon: _icon,
  children,
  cicrular,
  disabled,
  toggle,
  accent,
  size,
  label,
  name,
}: CheckboxProps) {
  const [checked, setChecked] = useState(_checked)

  useEffect(() => {
    setChecked(_checked)
  }, [_checked])

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    event.stopPropagation()

    setChecked(event.target.checked)
    _onChange?.(event)
  }, [])

  const toggleId = `toggle_${name}`
  let indicatorIcon

  if (toggle) {
    indicatorIcon = checked
      ? _icon?.indicator?.checked
      : _icon?.indicator?.unchecked
  } else {
    indicatorIcon = <EmblemOk />
  }

  const className = clsx(
    "adw",
    toggle ? "toggle" : "checkbox",
    size,
    accent,
    {
      disabled,
      cicrular,
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
}

Checkbox.displayName = "Adw.Checkbox"