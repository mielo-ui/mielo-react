import * as React from "react"

export const Restore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.988 4.992v6.012H11V4.992zm2 2H9v2.012H6.988zm0 0"
    />
  </svg>
)

Restore.displayName = "Mie.Icon.Window.Restore"