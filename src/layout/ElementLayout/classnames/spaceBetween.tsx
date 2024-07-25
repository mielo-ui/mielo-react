import { IndentSize } from "./indent"

export interface LayoutSpaceBetweenProps {
  sbh?: IndentSize
  sbv?: IndentSize
}

export function spaceBetween(indentProps: LayoutSpaceBetweenProps) {
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