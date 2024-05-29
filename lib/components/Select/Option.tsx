import type { MouseEventHandler } from "react"
import { useEffect, useRef } from "react"

export interface Option {
  label: string
  value: string
}

interface OptionProps {
  onClick: (value: Option["value"]) => void
  option: Option
}

export function OptionEl({
  option: { value, label: title },
  onClick,
}: OptionProps) {
  const optionRef = useRef<HTMLLIElement>(null)

  const onClickSelected =
    (selected: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(selected)
    }

  useEffect(() => {
    const option = optionRef.current
    if (!option) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value)
      }
    }

    option.addEventListener("keydown", handleEnterKeyDown)

    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown)
    }
  }, [value, onClick])

  return (
    <li
      onClick={onClickSelected(value)}
      className="option"
      ref={optionRef}
      value={value}
      tabIndex={0}
    >
      {title}
    </li>
  )
}