import { forwardRef } from "react"
import clsx from "clsx"

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

    const draggableProps: any = {
      "data-tauri-drag-region": true,

      style: {
        WebkitAppRegion: "drag",

        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
      },
    }

    return (
      <div ref={ref} {...rest} className={className}>
        {!!rest["data-desktop-drag"] && <div {...draggableProps} />}

        <div className="left">{left}</div>
        <div className="center">{header}</div>

        <div className="right">
          <div className="content">{right}</div>
          {controls}
        </div>
      </div>
    )
  },
)

HeaderBar.displayName = "Mie.HeaderBar"