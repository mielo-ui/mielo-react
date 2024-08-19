import { ForwardRefExoticComponent, FunctionComponent, forwardRef } from "react"

import {
  ElementLayout,
  ElementLayoutOptions,
  ElementLayoutProps,
  LayoutFlexProps,
  LayoutIndentProps,
  LayoutSpaceBetweenProps,
  LayoutRoundedProps,
  LayoutShadowProps,
  LayoutGapProps,
} from "./ElementLayout"

type ComponentLayoutProps = LayoutRoundedProps &
  LayoutSpaceBetweenProps &
  LayoutIndentProps &
  LayoutShadowProps &
  LayoutFlexProps &
  LayoutGapProps

export function layoutElement<P, L = ComponentLayoutProps>(
  component: FunctionComponent<P>,
  options?: ElementLayoutOptions,
) {
  const LayoutComponent = forwardRef(function LayoutComponent(props, ref) {
    const layoutProps = {
      component,
      options,
      props,
    }

    return <ElementLayout ref={ref} {...layoutProps} />
  }) as ForwardRefExoticComponent<P & L>

  LayoutComponent.displayName = `${component.displayName}.Layout`
  return LayoutComponent
}
