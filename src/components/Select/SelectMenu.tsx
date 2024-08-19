import { ReactNode, useCallback, useEffect, useRef } from "react"
import isEqual from "lodash.isequal"

import { SelectMenuProps, CustomItemProps, OptionValue } from "./Props"
import { LayoutProps } from "../../layout/ElementLayout"
import { ItemProps } from "../Item"
import * as L from "../../layout"

function SelectMenuItem({ isSelected, onSelect, option }: CustomItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)

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

  const itemProps: ItemProps<HTMLDivElement> & LayoutProps<any> = {
    onClick: () => onSelect(option),
    tabIndex: 0,

    active: isSelected,
    activatable: true,

    pv: "small",
    ph: "small",
    mh: "tiny",
    r: true,

    ...option,
  }

  return <L.List.Item ref={itemRef} {...itemProps} />
}

export function SelectMenu({
  customItem: CustomMenuItem,
  onSelect: _onSelect,
  isOpen: _isOpen,
  listProps,
  selected,
  options,
  close,
}: SelectMenuProps) {
  const onSelect = useCallback((option: OptionValue) => {
    _onSelect(option)
    close()
  }, [])

  const list: ReactNode = options.map((option, idx) => {
    const isSelected = isEqual(option.value, selected?.value)

    const itemProps = {
      isSelected,
      onSelect,
      option,
    }

    if (CustomMenuItem) {
      return <CustomMenuItem key={`item-${idx}`} {...itemProps} />
    } else {
      return <SelectMenuItem key={`item-${idx}`} {...itemProps} />
    }
  })

  return (
    <L.List pv="mini" gr="mini" {...listProps}>
      {list}
    </L.List>
  )
}
