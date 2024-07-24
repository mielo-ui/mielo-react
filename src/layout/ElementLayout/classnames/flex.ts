export interface LayoutFlexProps {
  justifyContent?: "start" | "end" | "stretch" | "center"
  alignItems?: "start" | "end" | "stretch" | "center"

  flex?: boolean
  flex1?: boolean

  column?: boolean
  row?: boolean
}

export function flex({
  justifyContent,
  alignItems,
  flex1,
  flex,
  column,
  row,
}: LayoutFlexProps) {
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
