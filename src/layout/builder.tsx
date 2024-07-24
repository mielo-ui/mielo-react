import { FunctionComponent } from "react"

import {
  ElementLayout,
  ElementLayoutOptions,
  ElementLayoutProps,
  LayoutFlexProps,
  LayoutIndentProps,
  LayoutRoundedProps,
  LayoutShadowProps,
} from "./ElementLayout"

type ComponentLayoutProps = LayoutRoundedProps &
  LayoutIndentProps &
  LayoutShadowProps &
  LayoutFlexProps

export function layoutElement<P, L = ComponentLayoutProps>(
  component: FunctionComponent<P>,
  options?: ElementLayoutOptions,
): FunctionComponent<P & L> {
  function LayoutComponent(
    props: any, // P & L,
  ) {
    const layoutProps: ElementLayoutProps<P> = {
      component,
      options,
      props,
    }

    return <ElementLayout {...layoutProps} />
  }

  LayoutComponent.displayName = `${component.displayName}.Layout`
  return LayoutComponent
}
