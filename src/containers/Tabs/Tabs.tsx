import clsx from "clsx"

import {
  useImperativeHandle,
  useCallback,
  forwardRef,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react"

import { Tab, TabOption, TabProps } from "./Tab"
import { RawTabs, TabsAccent } from "./Raw"
import { TabBackground } from "./Active"

import {
  LayoutIndentProps,
  LayoutRoundedProps,
  LayoutShadowProps,
  collectClassnames,
  extractProps,
} from "../../layout"

export interface TabsProps
  extends LayoutIndentProps,
    LayoutRoundedProps,
    LayoutShadowProps {
  onChange?: (name: string) => void

  transparent?: boolean
  animated?: boolean

  className?: string
  accent?: TabsAccent

  tabs: TabOption[] | Record<string, TabOption>
  selected: string

  tabProps?: Omit<TabProps, "transparent" | "selected" | "index" | "onClick">
}

export interface TabsHandles {
  // @PASS
}

const Tabs = forwardRef<TabsHandles, TabsProps>(function Tabs(props, ref) {
  const tabRef = useRef<HTMLDivElement>(null)
  const none = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(0)

  const tab = useMemo(
    () =>
      Array.isArray(props.tabs)
        ? props.tabs.find(tab => props.selected === tab.name)
        : props.tabs[props.selected],
    [props.tabs, props.selected],
  )

  if (!tab) {
    throw new Error("Property 'selected' required in Tabs component.")
  }

  const {
    props: {
      className: _className,
      tabProps: _tabProps,
      transparent,
      onChange,
      animated,
      selected,
      accent,
      tabs,
    },
    ...layoutProps
  } = extractProps(props)

  const accentClassName = accent && (accent === true ? "accent" : accent)

  const layoutClassNames = collectClassnames(layoutProps, {
    flex: false,
  })

  useEffect(() => {
    if (tabRef.current) {
      const { offsetLeft, clientWidth, clientHeight } = tabRef.current
      setHeight(clientHeight)
      setOffset(offsetLeft)
      setWidth(clientWidth)
    }
  }, [selected, tabRef])

  const onChangeTab = useCallback(
    (_idx: number, name: string) => (_onClickEvent: MouseEvent) => {
      // const tab = Array.isArray(tabs) ? tabs[_idx] : tabs[name]
      onChange?.(name)
    },
    [onChange, tabs],
  )

  useImperativeHandle(ref, () => {
    return {
      // @PASS
    }
  })

  const tabMapper = useCallback(
    (tab: TabOption, idx: number) => {
      const tabProps = {
        ref: selected === tab.name ? tabRef : none,
        onClick: onChangeTab(idx, tab.name),
        transparent: animated,
        selected: selected,
        key: tab.name,
        index: idx,

        ..._tabProps,
        ...tab,
      }

      return <Tab {...tabProps} />
    },
    [selected, animated, _tabProps],
  )

  const content = Array.isArray(tabs)
    ? tabs.map(tabMapper)
    : Object.entries(tabs).map(([_name, tab], idx) => tabMapper(tab, idx))

  const className = clsx(
    "mie tabs",
    accentClassName,
    _className,
    { transparent },
    ...layoutClassNames,
  )

  return (
    <div className={className}>
      {content}

      {animated && (
        <TabBackground
          {..._tabProps}
          accent={tab.accent}
          offset={offset}
          height={height}
          width={width}
        />
      )}
    </div>
  )
})

Tabs.displayName = "Mie.Tabs"

export default Object.assign(Tabs, {
  Raw: RawTabs,
})