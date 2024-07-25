import { LayoutSpaceBetweenProps, spaceBetween } from "./spaceBetween"
import { LayoutRoundedProps, rounded } from "./rounded"
import { LayoutShadowProps, shadow } from "./shadow"
import { LayoutFlexProps, flex } from "./flex"

import {
  LayoutIndentPadding,
  LayoutIndentMargin,
  LayoutIndentProps,
  indent,
} from "./indent"

interface LayoutClassNameProps
  extends LayoutRoundedProps,
    LayoutIndentProps,
    LayoutShadowProps,
    LayoutFlexProps,
    LayoutSpaceBetweenProps {}

export type {
  LayoutSpaceBetweenProps,
  LayoutClassNameProps,
  LayoutRoundedProps,
  LayoutIndentMargin,
  LayoutIndentPadding,
  LayoutIndentProps,
  LayoutShadowProps,
  LayoutFlexProps,
}

export { rounded, indent, shadow, flex, spaceBetween }