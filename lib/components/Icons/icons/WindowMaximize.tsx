import * as React from "react"

export const WindowMaximize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.988 3.992v8.012H12V3.992zm2 2H10v4.012H5.988zm0 0"
    />
  </svg>
)

WindowMaximize.displayName = "Adw.Icon.WindowMaximize"
