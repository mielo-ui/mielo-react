import * as cn from "./classnames"

export type LayoutProps<T> = Partial<
  cn.LayoutIndentProps &
    cn.LayoutRoundedProps &
    cn.LayoutShadowProps &
    cn.LayoutFlexProps &
    cn.LayoutSpaceBetweenProps
> &
  T

export interface LayoutExtractedProps {
  spaceBetween: cn.LayoutSpaceBetweenProps
  padding: cn.LayoutIndentPadding
  margin: cn.LayoutIndentMargin

  rounded: cn.LayoutRoundedProps
  shadow: cn.LayoutShadowProps

  flex: cn.LayoutFlexProps
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
  r, rt, rb, rl, rr,

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
    r, rt, rb, rl, rr,
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
    
    padding: paddingProps,
    margin: marginProps,

    shadow: shadowProps,
    props: props as T,
  }
}