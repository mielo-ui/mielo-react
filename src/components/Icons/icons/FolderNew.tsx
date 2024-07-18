import * as React from "react"

export const FolderNew = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.563 0-1-.438-1-1V5h11c.563 0 1 .438 1 1v1c0 .55.45 1 1 1s1-.45 1-1V6c0-1.645-1.355-3-3-3H9.414L7.707 1.293A1 1 0 0 0 7 1zm0 2h3.586l1 1H2c0-.563.438-1 1-1zm8 5v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
    />
  </svg>
)

FolderNew.displayName = "Mie.Icon.FolderNew"