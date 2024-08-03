export type RoundSize = boolean | "none" | "tiny" | "small" | "large"

export interface LayoutRoundedProps {
  r?: RoundSize // round all corners
  rt?: RoundSize // round top corners
  rb?: RoundSize // round bottom corners
  rl?: RoundSize // round left corners
  rr?: RoundSize // round right corners
}

export function rounded(roundProps: LayoutRoundedProps) {
  const names: string[] = []

  for (const [key, size] of Object.entries(roundProps as Record<string, RoundSize>)) {
    if (size) {
      const className = size === true ? key : `${key}-${size}`
      names.push(className)
    }
  }

  return names
}