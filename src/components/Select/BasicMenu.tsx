import { ReactNode, useCallback, useEffect, useRef } from "react"
import isEqual from "lodash.isequal"
import clsx from "clsx"

import { List, ListItem } from "../../containers/List"
import { DropdownContentProps } from "./Dropdown"

export interface OptionValue {
  label: string
  value: any
}

export interface CustomItemProps {
  option: OptionValue
  isSelected: boolean

  onSelect(option: OptionValue): void
}

export interface BasicMenuProps extends DropdownContentProps {
  selected?: OptionValue
  options: OptionValue[]

  customItem?: (props: CustomItemProps) => ReactNode
  onSelect(option: OptionValue): void
}

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
    <ListItem
      onClick={() => onSelect(option)}
      title={option.label}
      active={isSelected}
      ref={itemRef}
      tabIndex={0}
      activatable
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
      <List>{list}</List>
    </div>
  )
}
