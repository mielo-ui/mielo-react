import { useState, useEffect, useRef, useCallback } from "react"
import { Tooltip } from "react-tooltip"
import isEqual from "lodash.isequal"
import clsx from "clsx"

import { Option, OptionEl } from "./Option"
import { ChevronDown } from "./Icons"

export interface SelectProps {
  error?: string | string[]
  placeholder?: string
  options: Option[]
  disabled?: boolean
  value?: Option
  name?: string
  compact?: boolean
  opened?: boolean

  onChange?: (option: Option) => void
  onClose?: () => void
}

export function Select({
  placeholder,
  disabled,
  options,
  compact,
  opened,
  error,
  value,
  name,

  onChange,
  onClose,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const inputId = `entry_${name}`
  const tooltipId = `${inputId}_tooltip`

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [onClose])

  useEffect(() => {
    const inputElement = placeholderRef.current
    if (!inputElement) return

    const onEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen(prev => !prev)
      }
    }

    inputElement.addEventListener("keydown", onEnterKeyDown)

    return () => {
      inputElement.removeEventListener("keydown", onEnterKeyDown)
    }
  }, [])

  const onSelectOption = useCallback(
    (value: Option["value"]) => {
      const option = options.find(opt => isEqual(opt.value, value))
      setIsOpen(false)

      if (option) {
        onChange?.(option)
      }
    },
    [options],
  )

  const onInputClick = useCallback(() => {
    if (!disabled) {
      setIsOpen(prev => !prev)
    }
  }, [disabled])

  const errorTooltip = !!error && (
    <div className="adw tooltip">
      <div id={tooltipId} className="indicator">
        ?
      </div>
      <Tooltip anchorSelect={`#${tooltipId}`}>
        <div className="adw tooltip-content">
          {Array.isArray(error) ? (
            error.map((msg, idx) => (
              <div key={idx} className="message">
                {msg}
              </div>
            ))
          ) : (
            <div className="message">{error}</div>
          )}
        </div>
      </Tooltip>
    </div>
  )

  const containerProps = {
    "data-is-active": isOpen,
    "data-name": name,
    ref: rootRef,

    className: clsx("adw select", {
      selected: !!value?.value,
      opened: isOpen || opened,
      error: !!error,
      disabled,
      compact,
    }),
  }

  const inputProps = {
    "data-selected": !!value?.value,
    onClick: onInputClick,
    ref: placeholderRef,
    className: "input",
    role: "button",
    tabIndex: 0,
  }

  return (
    <div {...containerProps}>
      <div {...inputProps}>
        <div className="placeholder">{placeholder}</div>
        <div className="value">{value?.label}</div>

        {errorTooltip}

        <div className="arrow">
          <ChevronDown strokeWidth={2.5} size={18} />
        </div>
      </div>

      {(isOpen || opened) && (
        <ul className="options">
          {options.map(option => (
            <OptionEl
              onClick={onSelectOption}
              key={option.value}
              option={option}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

Select.displayName = "Adw.Select"
