import defaults from "lodash.defaults"

import { flex, indent, rounded, shadow } from "./classnames"
import { LayoutExtractedProps } from "./extractProps"

export interface ElementLayoutOptions {
  padding?: boolean
  margin?: boolean

  rounded?: boolean
  shadow?: boolean
  flex?: boolean
}

export const DEFAULT_OPTIONS: ElementLayoutOptions = {
  padding: true,
  margin: true,

  rounded: true,
  shadow: true,
  flex: true,
}

export function collectClassnames(
  layout: LayoutExtractedProps,
  options: ElementLayoutOptions,
) {
  const classnames: Array<string | boolean | undefined> = []
  const enabled = defaults(options, DEFAULT_OPTIONS)

  enabled.margin && classnames.push(...indent(layout.margin))
  enabled.padding && classnames.push(...indent(layout.padding))

  enabled.rounded && classnames.push(...rounded(layout.rounded))
  enabled.shadow && classnames.push(shadow(layout.shadow))
  enabled.flex && classnames.push(...flex(layout.flex))

  return classnames
}