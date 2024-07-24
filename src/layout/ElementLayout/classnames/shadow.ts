export type ShadowType = boolean | "inner" | "outer"

export interface LayoutShadowProps {
  shadow?: ShadowType
}

export function shadow({ shadow }: LayoutShadowProps) {
  return shadow && (shadow === true ? "shadow" : `shadow ${shadow}`)
}
