import * as React from "react"

export const UserHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 16c1.66 0 3-1.34 3-3V7c0-.93-.414-1.813-1.129-2.41L9.411.87a2.205 2.205 0 0 0-2.821 0L2.129 4.59A3.143 3.143 0 0 0 1 7v6c0 1.66 1.34 3 3 3zm-9-3V7c0-.336.148-.656.41-.871L7.871 2.41a.2.2 0 0 1 .258 0l4.46 3.719c.263.215.411.535.411.871v6c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1zm0 0"
    />
    <path
      fill="currentColor"
      d="M7 8h2c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1zm0 0"
    />
  </svg>
)

UserHome.displayName = "Mie.Icon.UserHome"
