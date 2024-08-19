import { LayoutSpaceBetweenProps, spaceBetween } from "./spaceBetween"
import { LayoutRoundedProps, rounded } from "./rounded"
import { LayoutShadowProps, shadow } from "./shadow"
import { LayoutFlexProps, flex } from "./flex"
import { LayoutGapProps, gap } from "./gap"

import {
  LayoutIndentPadding,
  LayoutIndentMargin,
  LayoutIndentProps,
  indent,
} from "./indent"

interface LayoutClassNameProps
  extends LayoutRoundedProps,
    LayoutSpaceBetweenProps,
    LayoutIndentProps,
    LayoutShadowProps,
    LayoutFlexProps,
    LayoutGapProps {}

export type {
  LayoutSpaceBetweenProps,
  LayoutClassNameProps,
  LayoutRoundedProps,
  LayoutIndentMargin,
  LayoutIndentPadding,
  LayoutIndentProps,
  LayoutShadowProps,
  LayoutFlexProps,
  LayoutGapProps,
}

export { rounded, indent, shadow, flex, spaceBetween, gap }