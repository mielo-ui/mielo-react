import { ReactNode } from "react"
import clsx from "clsx"

export interface TextParagraphProps {
  accent?: boolean | "success" | "warning" | "error"
  center?: boolean

  children?: ReactNode
}

export function TextParagraph({
  accent,
  center,
  children,
}: TextParagraphProps) {
  return (
    <p
      className={clsx(
        "adw text paragraph",
        {
          center,
          accent,
        },
        typeof accent !== "boolean" && accent,
      )}
    >
      {children}
    </p>
  )
}

TextParagraph.displayName = "Adw.Text.Paragraph"
