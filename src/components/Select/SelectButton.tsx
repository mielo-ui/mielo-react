import { useCallback } from "react"
import clsx from "clsx"

import { SelectButtonProps } from "./Props"
import { ChevronDown } from "./Icons"

export function SelectButton({
  selected,
  label,

  postfix,
  prefix,

  isOpen,
  close,
  open,

  accent,
  name,
  size,
}: SelectButtonProps) {
  const onClick = useCallback(() => {
    isOpen ? close() : open()
  }, [isOpen])

  return (
    <div
      className={clsx("base", { opened: isOpen, selected: !!selected })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {prefix}

      <div className="header">
        <div className="label">{label}</div>
        {selected && <div className="value">{selected.title}</div>}
      </div>

      <div className="right">
        {postfix}

        <div className="arrow">
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}
