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

export interface ViewFlexProps {
  flex?: boolean
  flex1?: boolean

  column?: boolean
  row?: boolean

  justifyContent?: "start" | "end" | "stretch" | "center"
  alignItems?: "start" | "end" | "stretch" | "center"
}

export interface ViewIndentProps {
  // * padding
  p?: IndentSize // all sides
  ph?: IndentSize // horizontally
  pv?: IndentSize // vertically
  pt?: IndentSize // top
  pr?: IndentSize // right
  pb?: IndentSize // bottom
  pl?: IndentSize // left

  // * margin
  m?: IndentSize // all sides
  mh?: IndentSize // horizontally
  mv?: IndentSize // vertically
  mt?: IndentSize // top
  mr?: IndentSize // right
  mb?: IndentSize // bottom
  ml?: IndentSize // left
}

export function viewFlexboxClass({
  justifyContent,
  alignItems,
  flex1,
  flex,
  column,
  row,
}: ViewFlexProps) {
  const names: any[] = []

  if (!flex) {
    return names
  }

  names.push("flex", { column, row })
  flex1 && names.push("flex-1")

  justifyContent && names.push(`justify-content-${justifyContent}`)
  alignItems && names.push(`align-items-${alignItems}`)

  return names
}

export function viewIndentClass(indentProps: ViewIndentProps) {
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