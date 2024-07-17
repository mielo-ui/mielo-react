import * as React from "react"

export const WeatherClear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={16}
    width={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 7h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2.754-4.66-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414zM7.004.992v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0zm-4.66 2.75.707.707a1 1 0 1 0 1.414-1.414l-.707-.707a.993.993 0 0 0-.965-.258.994.994 0 0 0-.45 1.672zM.996 8.984h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm2.754 4.664.707-.707a1 1 0 1 0-1.414-1.414l-.711.707a1.007 1.007 0 0 0 0 1.414c.39.391 1.027.391 1.418 0zm5.242 1.348v-1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm4.66-2.754-.707-.707a1.009 1.009 0 0 0-.968-.262 1.007 1.007 0 0 0-.707.711.995.995 0 0 0 .261.965l.707.707a.995.995 0 0 0 1.672-.445.998.998 0 0 0-.258-.969zM8 10c-1.098 0-2-.902-2-2s.902-2 2-2 2 .902 2 2-.902 2-2 2zm0-6C5.785 4 4 5.785 4 8s1.785 4 4 4 4-1.785 4-4-1.785-4-4-4zm0 0"
    />
  </svg>
)

WeatherClear.displayName = "Mie.Icon.WeatherClear"
