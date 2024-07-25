import { forwardRef, ReactNode, useEffect, useRef, useState } from "react"
import clsx from "clsx"

export interface CollapsibleProps {
  children?: ReactNode
  className?: string
  open?: boolean
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  function Collapsible({ className: _className, children, open }, rootRef) {
    const [height, setHeight] = useState<number | undefined>(
      open ? undefined : 0,
    )
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

    return (
      <div ref={rootRef} className={className} style={{ height }}>
        <div ref={contentRef}>{children}</div>
      </div>
    )
  },
)

Collapsible.displayName = "Mie.Collapsible"