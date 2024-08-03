import { MouseEventHandler, useCallback, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

import { ModalProps } from "./Props"
import { Portal } from "./Portal"

export function Modal({ children, isOpen, onRequestClose, ...rest }: ModalProps) {
  useEffect(() => {
    const onPressEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onRequestClose?.()
      }
    }

    window.addEventListener("keydown", onPressEscape)

    return () => {
      window.removeEventListener("keydown", onPressEscape)
    }
  }, [onRequestClose])

  // Protect content container from clickOutside exit trigger
  const onClickWindow: MouseEventHandler<HTMLDivElement> = useCallback(event => {
    event.stopPropagation()
    event.preventDefault()
  }, [])

  return (
    <Portal isOpen={isOpen} onRequestClose={onRequestClose}>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 300, exit: 300 }}
        classNames="modal"
      >
        {/*
          If change className with multiple names like "mie modal"
          CssTransition failed to change animation-state
        */}
        <div className="mie modal" {...rest}>
          <div className="window" onClick={onClickWindow}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  )
}