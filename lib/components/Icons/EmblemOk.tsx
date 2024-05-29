import * as React from "react"

export const EmblemOk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.753 4.659a1 1 0 0 0-.432-1.607 1 1 0 0 0-1.074.289L5.95 10.536 3.706 8.292a1 1 0 1 0-1.414 1.416l3 3a1 1 0 0 0 1.46-.049l7-8Z"
    />
  </svg>
)

EmblemOk.displayName = "Adw.Icon.EmblemOk"
