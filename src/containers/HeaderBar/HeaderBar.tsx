import { forwardRef } from "react"
import clsx from "clsx"

import { InnerHeader } from "./InnerHeader"
import { HeaderBarProps } from "./Props"

export const HeaderBar = forwardRef<HTMLDivElement, HeaderBarProps>(
  function HeaderBar(
    {
      className: _className,
      transparent,
      bordered,
      controls,
      accent,
      header,
      left,
      right,
      ...rest
    },
    ref,
  ) {
    const accentClassName = accent && (accent === true ? "accent" : accent)

    const className = clsx(
      "mie headerbar",
      accentClassName,
      { transparent, bordered },
      _className,
    )

    return (
      <div ref={ref} {...rest} className={className}>
        <div className="left">{left}</div>

        <div className="center">
          <InnerHeader header={header} />
        </div>

        <div className="right">
          <div className="content">{right}</div>

          {controls}
        </div>
      </div>
    )
  },
)

HeaderBar.displayName = "Mie.HeaderBar"