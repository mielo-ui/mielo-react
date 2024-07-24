import * as cn from "./classnames"

export type LayoutProps<T> = Partial<
  cn.LayoutIndentProps &
    cn.LayoutRoundedProps &
    cn.LayoutShadowProps &
    cn.LayoutFlexProps
> &
  T

export interface LayoutExtractedProps {
  padding: cn.LayoutIndentPadding
  margin: cn.LayoutIndentMargin

  rounded: cn.LayoutRoundedProps
  shadow: cn.LayoutShadowProps

  flex: cn.LayoutFlexProps
}

// prettier-ignore
export function extractProps<T>({
  justifyContent,
  alignItems,
  column,
  flex1,
  flex,
  row,
  
  p, ph, pv, pt, pr, pb, pl,
  m, mh, mv, mt, mr, mb, ml,
  r, rt, rb, rl, rr,

  shadow,

  ...props
}: LayoutProps<T>): LayoutExtractedProps & { props: T } {
  const flexProps = {
    justifyContent,
    alignItems,
    column,
    flex1,
    flex,
    row,
  }

  const paddingProps = {
    p, ph, pv, pt, pr, pb, pl,
  }

  const marginProps = {
    m, mh, mv, mt, mr, mb, ml,
  }

  const roundedProps = {
    r, rt, rb, rl, rr,
  }

  const shadowProps = {
    shadow,
  }

  return {
    rounded: roundedProps,
    flex: flexProps,
    
    padding: paddingProps,
    margin: marginProps,

    shadow: shadowProps,
    props: props as T,
  }
}