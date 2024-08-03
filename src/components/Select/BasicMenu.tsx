import { ReactNode, useCallback, useEffect, useRef } from "react"
import isEqual from "lodash.isequal"

import * as L from "../../layout"
import { BasicMenuProps, CustomItemProps, OptionValue } from "./Props"

function BasicListItem({ isSelected, onSelect, option }: CustomItemProps) {
  const itemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item) return

    const onEnterKeydown = (event: KeyboardEvent) => {
      if (document.activeElement === item && event.key === "Enter") {
        onSelect(option)
      }
    }

    item.addEventListener("keydown", onEnterKeydown)

    return () => {
      item.removeEventListener("keydown", onEnterKeydown)
    }
  }, [option, onSelect])

  return (
    <L.ListItem
      onClick={() => onSelect(option)}
      title={option.label}
      active={isSelected}
      ref={itemRef}
      tabIndex={0}
      activatable
      ph="large"
      mh="small"
      pv
      r
    />
  )
}

export function BasicMenu({
  onSelect: _onSelect,
  customItem,
  selected,
  options,
  isOpen,
  close,
}: BasicMenuProps) {
  const onSelect = useCallback((option: OptionValue) => {
    _onSelect(option)
    close()
  }, [])

  const list: ReactNode = options.map((option, idx) => {
    const itemProps = {
      isSelected: isEqual(option.value, selected),
      onSelect,
      option,
    }

    if (customItem) {
      return customItem(itemProps)
    } else {
      return <BasicListItem key={`item-${idx}`} {...itemProps} />
    }
  })

  return (
    <div className="basic">
      <L.List>{list}</L.List>
    </div>
  )
}
