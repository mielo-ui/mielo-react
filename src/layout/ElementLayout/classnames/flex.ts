export interface LayoutFlexProps {
  fjc?: "start" | "end" | "stretch" | "center"
  fai?: "start" | "end" | "stretch" | "center"

  f?: boolean
  f1?: boolean
  fw?: boolean

  fc?: boolean
  fr?: boolean
}

export function flex({ fjc, fai, f1, f, fc, fr, fw }: LayoutFlexProps) {
  const names: any[] = []

  if (!f) {
    return names
  }

  names.push("f", { fc, fr, fw })
  f1 && names.push("f1")

  fjc && names.push(`fjc-${fjc}`)
  fai && names.push(`fai-${fai}`)

  return names
}
