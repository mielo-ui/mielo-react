import { useCallback } from "react"
import clsx from "clsx"

export interface TabOption {
  title: string
  name: string
  icon?: JSX.Element
}

interface TabProps extends TabOption {
  onClick?: (event: any) => void
  selected: string
  index: number
}

interface TabsProps {
  onChange?: (name: any) => void
  selected: string
  tabs: TabOption[]
}

function Tab(props: TabProps) {
  const { title, name, icon, onClick } = props
  const active = name === props.selected

  return (
    <div className={clsx("tab", { active })} onClick={onClick}>
      {icon && <div className="icon">{icon}</div>}
      <div className="title">{title}</div>
    </div>
  )
}

export function Tabs({ tabs, selected, onChange }: TabsProps) {
  const onChangeTab = useCallback(
    (index: number) => (_onClickEvent: any) => {
      const tab = tabs[index]
      onChange?.(tab.name)
    },
    [onChange, tabs],
  )

  return (
    <div className="adw tabs">
      {tabs.map((tab, idx) => (
        <Tab
          onClick={onChangeTab(idx)}
          selected={selected}
          key={tab.name}
          index={idx}
          {...tab}
        />
      ))}
    </div>
  )
}

Tabs.displayName = "Adw.Tabs"
