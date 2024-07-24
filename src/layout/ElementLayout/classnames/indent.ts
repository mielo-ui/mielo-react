export type IndentSize =
  | boolean
  | "none"
  | "mini"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface LayoutIndentPadding {
  p?: IndentSize // all sides
  ph?: IndentSize // horizontally
  pv?: IndentSize // vertically
  pt?: IndentSize // top
  pr?: IndentSize // right
  pb?: IndentSize // bottom
  pl?: IndentSize // left
}

export interface LayoutIndentMargin {
  m?: IndentSize // all sides
  mh?: IndentSize // horizontally
  mv?: IndentSize // vertically
  mt?: IndentSize // top
  mr?: IndentSize // right
  mb?: IndentSize // bottom
  ml?: IndentSize // left
}

export interface LayoutIndentProps
  extends LayoutIndentMargin,
    LayoutIndentPadding {}

export function indent(indentProps: LayoutIndentMargin | LayoutIndentPadding) {
  const names: string[] = []

  for (const [key, size] of Object.entries(
    indentProps as Record<string, IndentSize>,
  )) {
    if (size) {
      const className = size === true ? key : `${key}-${size}`
      names.push(className)
    }
  }

  return names
}