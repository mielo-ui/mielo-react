import * as React from "react"

export const WindowNew = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 0C1.355 0 0 1.355 0 3v8c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.57 0-1-.43-1-1V5c0-.555.445-1 1-1h10c.555 0 1 .445 1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-1.645-1.355-3-3-3zm0 0"
    />
    <path fill="currentColor" d="M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0" />
  </svg>
)

WindowNew.displayName = "Mie.Icon.WindowNew"
