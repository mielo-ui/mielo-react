import { ForwardedRef, forwardRef } from "react"
import clsx from "clsx"

import { ImageProps } from "./Props"
const { assign } = Object

export const Image = forwardRef<HTMLElement, ImageProps>(function Image(
  {
    className: _className,
    style: _style,
    transparent,
    container,
    children,
    circular,
    bordered,
    onClick,
    accent,
    size,
    src,
    ...rest
  },
  ref,
) {
  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie image",
    size,
    accentClassName,
    { bordered, transparent, circular },
    _className,
  )

  const containerStyle = assign(
    {
      background: `url(${src})`,
    },
    _style ? _style : {},
  )

  return container ? (
    <div
      {...rest}
      ref={ref as ForwardedRef<HTMLDivElement>}
      style={containerStyle}
      className={className}
    >
      {children}
    </div>
  ) : (
    <img
      {...rest}
      ref={ref as ForwardedRef<HTMLImageElement>}
      className={className}
      style={_style}
      src={src}
    />
  )
})

Image.displayName = "Mie.Image"