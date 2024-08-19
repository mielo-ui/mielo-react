import defaults from "lodash.defaults"

import { flex, gap, indent, rounded, shadow, spaceBetween } from "./classnames"
import { LayoutExtractedProps } from "./extractProps"

export interface ElementLayoutOptions {
  padding?: boolean
  margin?: boolean

  spaceBetween?: boolean
  rounded?: boolean
  shadow?: boolean
  flex?: boolean
  gap?: boolean
}

export const DEFAULT_OPTIONS: ElementLayoutOptions = {
  spaceBetween: false,
  gap: false,

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

  enabled.shadow && classnames.push(shadow(layout.shadow))
  enabled.rounded && classnames.push(...rounded(layout.rounded))
  enabled.flex && classnames.push(...flex(layout.flex))
  enabled.gap && classnames.push(...gap(layout.gap))

  enabled.margin && classnames.push(...indent(layout.margin))
  enabled.padding && classnames.push(...indent(layout.padding))
  enabled.margin && classnames.push(...spaceBetween(layout.spaceBetween))

  return classnames
}