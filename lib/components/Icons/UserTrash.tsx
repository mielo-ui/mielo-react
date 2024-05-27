import * as React from "react"

export const UserTrash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={16} height={16} {...props}>
    <g fill="currentColor">
      <path d="M1 3h14c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1zm0 0" />
      <path d="M4 4V2.5C4 1.113 5.113 0 6.5 0h2.98c1.383 0 2.5 1.113 2.5 2.5V4h-2V2.5c0-.27-.23-.5-.5-.5H6.5c-.27 0-.5.23-.5.5V4zM4 4v9c0 .547.453 1 1 1h6c.547 0 1-.453 1-1V4h2v9c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V4zm0 0" />
      <path d="M7 7v5c0 .277-.223.5-.5.5S6 12.277 6 12V7c0-.277.223-.5.5-.5s.5.223.5.5zM10 7v5c0 .277-.223.5-.5.5S9 12.277 9 12V7c0-.277.223-.5.5-.5s.5.223.5.5zm0 0" />
    </g>
  </svg>
)

UserTrash.displayName = "Adw.Icon.UserTrash"
