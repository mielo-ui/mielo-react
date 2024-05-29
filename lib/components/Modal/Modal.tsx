import { CSSTransition } from "react-transition-group"

import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react"

import { Portal } from "./Portal"

export interface ModalProps {
  onRequestClose?: () => void
  isOpen?: boolean

  children?: ReactNode
}

export function Modal({ children, ...props }: ModalProps) {
  useEffect(() => {
    const onPressEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onRequestClose?.()
      }
    }

    window.addEventListener("keydown", onPressEscape)

    return () => {
      window.removeEventListener("keydown", onPressEscape)
    }
  }, [props.onRequestClose])

  // Protect content container from clickOutside exit trigger
  const onClickWindow: MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.stopPropagation()
      event.preventDefault()
    },
    [],
  )

  return (
    <Portal {...props}>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.isOpen}
        timeout={{ enter: 300, exit: 300 }}
        classNames="modal"
      >
        {/*
          If change className with multiple names like "adw modal"
          CssTransition failed to change animation-state
        */}
        <div className="adw modal">
          <div className="window" onClick={onClickWindow}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  )
}