import * as cn from "./classnames"

export type LayoutProps<T> = Partial<
  cn.LayoutSpaceBetweenProps &
    cn.LayoutRoundedProps &
    cn.LayoutIndentProps &
    cn.LayoutShadowProps &
    cn.LayoutFlexProps &
    cn.LayoutGapProps
> &
  T

export interface LayoutExtractedProps {
  spaceBetween: cn.LayoutSpaceBetweenProps
  padding: cn.LayoutIndentPadding
  margin: cn.LayoutIndentMargin

  rounded: cn.LayoutRoundedProps
  shadow: cn.LayoutShadowProps

  flex: cn.LayoutFlexProps
  gap: cn.LayoutGapProps
}

// prettier-ignore
export function extractProps<T>({
  fjc,
  fai,
  fc,
  fw,
  f1,
  fr,
  f,
  
  p, ph, pv, pt, pr, pb, pl,
  m, mh, mv, mt, mr, mb, ml,

  r, rt, rb, rl, rr, rtl, rtr, rbl, rbr,

  g, gr, gc,

  sbh,
  sbv,

  shadow,

  ...props
}: LayoutProps<T>): LayoutExtractedProps & { props: T } {
  const flexProps = {
    fjc, fai, fc, f1, fr, f, fw
  }

  const paddingProps = {
    p, ph, pv, pt, pr, pb, pl,
  }

  const marginProps = {
    m, mh, mv, mt, mr, mb, ml,
  }

  const roundedProps = {
    r, rt, rb, rl, rr, rtl, rtr, rbl, rbr,
  }

  const gapProps = {
    g, gc, gr,
  }

  const shadowProps = {
    shadow,
  }

  const spaceBetweenProps = {
    sbh,
    sbv,
  }

  return {
    spaceBetween: spaceBetweenProps,
    rounded: roundedProps,
    flex: flexProps,
    gap: gapProps,
    
    padding: paddingProps,
    margin: marginProps,

    shadow: shadowProps,
    props: props as T,
  }
}