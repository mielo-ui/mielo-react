export interface LayoutFlexProps {
  fjc?: "start" | "end" | "stretch" | "center"
  fai?: "start" | "end" | "stretch" | "center"

  f?: boolean
  f1?: boolean
  fw?: boolean

  fc?: boolean
  fr?: boolean
}

export function flex(opts: LayoutFlexProps) {
  // prettier-ignore
  const toggles: Array<"f1" | "f" | "fc" | "fr" | "fw"> = ["f1", "f", "fc", "fr", "fw"]
  const mapped: Array<"fjc" | "fai"> = ["fjc", "fai"]
  const out: string[] = []

  toggles.forEach(pk => {
    opts[pk] && out.push(pk)
  })

  mapped.forEach(pk => {
    opts[pk] && out.push(`${pk}-${opts[pk]}`)
  })

  return out
}
