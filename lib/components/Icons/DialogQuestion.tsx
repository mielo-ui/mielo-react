import * as React from "react"

export const DialogQuestion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 .031c-.398 0-.816.16-1.125.469L.5 6.875a1.591 1.591 0 0 0 0 2.25L6.875 15.5a1.591 1.591 0 0 0 2.25 0L15.5 9.125a1.591 1.591 0 0 0 0-2.25L9.125.5A1.61 1.61 0 0 0 8 .031zm.152 2.977a2.99 2.99 0 0 1 1.97.87 3.012 3.012 0 0 1 .651 3.27A3.015 3.015 0 0 1 9 8.82V10H7V8c0-.55.45-1 1-1a1 1 0 1 0-1-1H5c0-1.21.734-2.309 1.852-2.77a2.945 2.945 0 0 1 1.3-.222zM8 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 0"
    />
  </svg>
)

DialogQuestion.displayName = "Adw.Icon.DialogQuestion"
