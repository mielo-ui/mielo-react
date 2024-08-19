import { IndentSize } from "./indent"

export interface LayoutGapProps {
  g?: IndentSize
  gr?: IndentSize
  gc?: IndentSize
}

export function gap(gapProps: LayoutGapProps) {
  const names: string[] = []

  for (const [key, size] of Object.entries(gapProps as Record<string, IndentSize>)) {
    if (size) {
      const className = size === true ? key : `${key}-${size}`
      names.push(className)
    }
  }

  return names
}