import * as React from "react"

export const Minimize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path fill="currentColor" d="M4 10.008h8v1.988H4zm0 0" />
  </svg>
)

Minimize.displayName = "Mie.Icon.Window.Minimize"