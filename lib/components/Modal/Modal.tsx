import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import Portal from "./Portal"
import { CSSTransition } from "react-transition-group"
import { createPortal } from "react-dom"

export interface ModalProps {
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const MODAL_ID = "modal.root"

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    Portal.createContainer(MODAL_ID)
    setMounted(true)
  }, [])

  useEffect(() => {
    const onPressEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.()
      }
    }

    window.addEventListener("keydown", onPressEscape)

    return () => {
      window.removeEventListener("keydown", onPressEscape)
    }
  }, [onClose])

  const onClickOutside: MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      const { target } = event

      if (target instanceof Node && rootRef.current === target) {
        onClose?.()
      }
    },
    [onClose, rootRef],
  )

  const onClickWindow: MouseEventHandler<HTMLDivElement> = useCallback(
    event => {
      event.stopPropagation()
      event.preventDefault()
    },
    [],
  )

  return isOpen
    ? createPortal(
        <CSSTransition
          nodeRef={windowRef}
          timeout={300}
          in={isOpen}
          unmountOnExit
          mountOnEnter
          onEntering={() => console.log("entering", new Date().getTime())}
          onEnter={() => console.log("enter", new Date().getTime())}
          appear
          enter
          classNames={{
            appear: "fade-appear",
            appearActive: "fade-appear-active",
            appearDone: "fade-appear-done",
            enter: "fade-enter",
            enterActive: "fade-active",
            enterDone: "fade-done",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
            exitDone: "fade-exit-done",
          }}
        >
          <div onClick={onClickOutside} ref={windowRef} className="adw modal">
            <div onClick={onClickWindow} ref={modalRef} className="window">
              {children}
            </div>
          </div>
        </CSSTransition>,
        document.getElementById(MODAL_ID) as HTMLElement,
      )
    : null
}