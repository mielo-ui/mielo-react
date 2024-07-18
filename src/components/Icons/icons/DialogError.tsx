import * as React from "react"

export const DialogError = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 1C4.129 1 1 4.129 1 8s3.129 7 7 7 7-3.129 7-7-3.129-7-7-7zM4 7h8v2H4zm0 0"
    />
  </svg>
)

DialogError.displayName = "Mie.Icon.DialogError"