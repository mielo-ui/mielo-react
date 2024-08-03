import { forwardRef, useEffect, useRef, useState } from "react"
import clsx from "clsx"

import { CollapsibleProps } from "./Props"

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  function Collapsible(
    { className: _className, style: _style, children, open, ...rest },
    ref,
  ) {
    const [height, setHeight] = useState<number | undefined>(open ? undefined : 0)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!height || !open || !contentRef.current) return undefined

      const watch = new ResizeObserver(([{ contentRect: rect }]) => {
        setHeight(rect.height)
      })

      watch.observe(contentRef.current)

      return () => {
        watch.disconnect()
      }
    }, [height, open])

    useEffect(() => {
      const next = contentRef.current?.getBoundingClientRect().height
      setHeight(open ? next : 0)
    }, [open])

    const className = clsx("mie collapsible", _className)
    const style = Object.assign({}, { height }, _style || {})

    return (
      <div ref={ref} className={className} style={style} {...rest}>
        <div ref={contentRef}>{children}</div>
      </div>
    )
  },
)

Collapsible.displayName = "Mie.Collapsible"