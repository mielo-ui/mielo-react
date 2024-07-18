import { ReactNode } from "react"

import { TextParagraph } from "./Paragraph"
import clsx from "clsx"

export interface TextProps {
  accent?: boolean | "success" | "warning" | "error"
  center?: boolean

  children?: ReactNode
}

function Text({ accent, center, children }: TextProps) {
  return (
    <div
      className={clsx(
        "mie text",
        {
          center,
          accent,
        },
        typeof accent !== "boolean" && accent,
      )}
    >
      {children}
    </div>
  )
}

Text.displayName = "Mie.Text"

export default Object.assign(Text, {
  Paragraph: TextParagraph,
})