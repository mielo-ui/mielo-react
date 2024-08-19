import clsx from "clsx"

import {
  useImperativeHandle,
  useCallback,
  forwardRef,
  useEffect,
  useState,
  useRef,
} from "react"

import { DropdownHandles, DropdownProps } from "./Props"

export const Dropdown = forwardRef<DropdownHandles, DropdownProps>(function Dropdown(
  {
    className: _className,
    onClose: _onClose,
    onOpen: _onOpen,
    menuHeight,
    opened,
    props,

    content,
    menu,
  },
  ref,
) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && !containerRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener("click", onClickOutside)

    return () => {
      window.removeEventListener("click", onClickOutside)
    }
  }, [])

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const onEnterKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen(prev => {
          const next = !prev

          next ? _onOpen?.() : _onClose?.()
          return next
        })
      }
    }

    content.addEventListener("keydown", onEnterKeydown)

    return () => {
      content.removeEventListener("keydown", onEnterKeydown)
    }
  }, [])

  const onOpen = useCallback(() => {
    _onOpen?.()
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    _onClose?.()
    setIsOpen(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      close: onClose,
      open: onOpen,
    }
  })

  const className = {
    content: clsx("content", _className?.content),
    container: clsx("mie dropdown", _className?.container, {
      opened: isOpen || opened,
    }),
    menu: clsx("menu", _className?.menu, {
      opened: isOpen || opened,
    }),
  }

  const containerStyle = Object.assign(
    {},
    isOpen && {
      zIndex: 100,
    },
    props?.container?.style,
  )

  const menuStyle = Object.assign(
    {},
    menuHeight &&
      isOpen && {
        minHeight: menuHeight,
      },
    props?.menu?.style,
  )

  const renderContentProps = {
    close: onClose,
    open: onOpen,
    isOpen,
  }

  return (
    <div
      {...(props?.container ? props?.container : {})}
      className={className.container}
      data-is-active={isOpen}
      style={containerStyle}
      ref={containerRef}
    >
      <div
        {...(props?.menu ? props?.menu : {})}
        className={className.menu}
        style={menuStyle}
        ref={menuRef}
      >
        {menu(renderContentProps)}
      </div>
      <div ref={contentRef} className={className.content} {...props?.content}>
        {content(renderContentProps)}
      </div>
    </div>
  )
})

Dropdown.displayName = "Mie.Dropdown"