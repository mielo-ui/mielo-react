import { createElement, FunctionComponent } from "react"
import clsx from "clsx"

import { LayoutClassNameProps } from "./classnames"
import { extractProps } from "./extractProps"

import {
  ElementLayoutOptions,
  collectClassnames,
  DEFAULT_OPTIONS,
} from "./collectClassnames"

export interface ElementLayoutProps<P> {
  component: FunctionComponent<P>
  options?: ElementLayoutOptions
  props?: LayoutClassNameProps
}

export function ElementLayout<P>({
  options = DEFAULT_OPTIONS,
  component,
  props: rest,
}: ElementLayoutProps<P>) {
  const { props, ...layout } = extractProps<P>(rest as any)

  const className = clsx(
    (props as any)?.className,
    collectClassnames(layout, options),
  )

  ;(props as any).className = className

  return createElement(component as any, props as any)
}

