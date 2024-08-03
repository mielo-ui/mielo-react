import { forwardRef, useEffect, useState, useRef } from "react"
import clsx from "clsx"

import { SplitViewProps } from "./Props"
import { Sidebar } from "../Sidebar"

const SplitView = forwardRef<HTMLDivElement, SplitViewProps>(function SplitView(
  {
    className: _className,
    headerbar: HeaderBar,
    sidebar: Sidebar,
    sidebarOpen,
    children,
    overlay,
    accent,
    ...rest
  },
  ref,
) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const accentClassName = accent && (accent === true ? "accent" : accent)

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(contentRef.current?.scrollTop || 0)
    }

    contentRef.current?.addEventListener("scroll", onScroll)

    return () => {
      contentRef.current?.removeEventListener("scroll", onScroll)
    }
  }, [contentRef.current])

  const className = clsx("mie splitview", accentClassName, _className)

  return (
    <div ref={ref} {...rest} className={className}>
      {overlay && sidebarOpen && <div onClick={overlay} className="overlay" />}
      {Sidebar && <Sidebar open={sidebarOpen} />}

      <div className="container">
        {HeaderBar && <HeaderBar scrollTop={scrollTop} />}

        <div ref={contentRef} className="content">
          {children}
        </div>
      </div>
    </div>
  )
})

SplitView.displayName = "Mie.SplitView"

export default Object.assign(SplitView, {
  Sidebar,
})