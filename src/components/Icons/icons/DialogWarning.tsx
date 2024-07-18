import * as React from "react"

export const DialogWarning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.906.094C7.38.066 6.867.375 6.47 1.063L.219 12.655C-.316 13.621.266 15 1.312 15H14.47c.98 0 1.902-1.16 1.219-2.344L9.375 1.125C8.977.48 8.434.121 7.906.094zM9 4v5c.008.527-.473 1-1 1s-1.008-.473-1-1V4zm-1 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 0"
    />
  </svg>
)

DialogWarning.displayName = "Mie.Icon.DialogWarning"