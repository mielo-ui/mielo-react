import defaults from "lodash.defaults"
import { forwardRef } from "react"
import clsx from "clsx"

import * as WindowIcons from "../../components/Icon/icons/Window"
import { Button, Icon } from "../../components"
import { WindowControlsProps } from "./Props"

const DEFAULT_ICONS = {
  maximize: <WindowIcons.Maximize />,
  minimize: <WindowIcons.Minimize />,
  restore: <WindowIcons.Restore />,
  close: <WindowIcons.Close />,
}

export const WindowControls = forwardRef<HTMLDivElement, WindowControlsProps>(
  function WindowControls(
    {
      icons: _icons = DEFAULT_ICONS,
      className: _className,
      onClickControl,
      controls,
      ...rest
    },
    ref,
  ) {
    const className = clsx("mie window-controls", _className)
    const icons = defaults(_icons, DEFAULT_ICONS)

    return (
      <div ref={ref} {...rest} className={className}>
        {controls.map((control, idx) => (
          <Button
            onClick={event => onClickControl?.(event, control)}
            icon={<Icon size="small" icon={icons[control]} />}
            transparent={control !== "close"}
            key={`${control}-${idx}`}
            className={control}
            size="tiny"
            circular
          />
        ))}
      </div>
    )
  },
)

WindowControls.displayName = "Mie.Window.Controls"