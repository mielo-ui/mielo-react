import { createElement, forwardRef, FunctionComponent } from "react"
import clsx from "clsx"

import { LayoutClassNameProps } from "./classnames"
import { extractProps } from "./extractProps"

import {
  ElementLayoutOptions,
  collectClassnames,
  DEFAULT_OPTIONS,
} from "./collectClassnames"

interface ElementLayoutComponentProps extends LayoutClassNameProps {
  [key: string]: any
}

export interface ElementLayoutProps {
  component: FunctionComponent<any>
  options?: ElementLayoutOptions
  props?: ElementLayoutComponentProps
}

export const ElementLayout = forwardRef<any, any>(function ElementLayout(
  { options = DEFAULT_OPTIONS, props: rest, component },
  ref,
) {
  const { props, ...layout } = extractProps(rest || {})
  props.ref = ref

  props.className = clsx(props.className, collectClassnames(layout, options))

  return createElement(component, props)
})

