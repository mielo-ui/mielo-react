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
    onClose: _onClose,
    onOpen: _onOpen,
    opened,

    className,
    content,
    props,
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

  const containerProps = Object.assign(
    {
      className: clsx("mie dropdown", className?.container, {
        opened: isOpen || opened,
      }),

      style: Object.assign(
        {},
        isOpen && {
          zIndex: 100,
        },
      ) as any,

      "data-is-active": isOpen,
      ref: containerRef,
    },
    props?.container,
  )

  const contentProps = Object.assign(
    {
      className: clsx("content", className?.content),
      ref: contentRef,
    },
    props?.content,
  )

  const menuProps = Object.assign(
    {
      className: clsx("menu", className?.menu, {
        opened: isOpen || opened,
      }),
      ref: menuRef,
    },
    props?.menu,
  )

  const renderContentProps = {
    close: onClose,
    open: onOpen,
    isOpen,
  }

  return (
    <div {...containerProps}>
      <div {...menuProps}>
        <div className="content">{menu(renderContentProps)}</div>
      </div>
      <div {...contentProps}>{content(renderContentProps)}</div>
    </div>
  )
})

Dropdown.displayName = "Mie.Dropdown"