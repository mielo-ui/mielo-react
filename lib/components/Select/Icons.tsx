export interface IconProps {
    strokeWidth?: number
    color?: string
    size?: number
}

export const ChevronDown = ({
  strokeWidth,
  color,
  size,
  ...props
}: IconProps & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size || 16}
    height={size || 16}
    stroke={color || "currentColor"}
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeWidth={strokeWidth || 2}
    fill="none"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)
