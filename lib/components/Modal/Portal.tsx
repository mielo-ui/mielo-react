import { createPortal } from "react-dom"

export interface PortalProps {
  children: React.ReactNode
  onRequestClose?: () => void
  isOpen?: boolean
}

function makePortal(
  id: string,
  parent: HTMLElement = document.body,
): HTMLElement {
  const exists = document.getElementById(id)
  if (exists) {
    return exists
  }

  const container = document.createElement("div")
  container.setAttribute("id", id)

  parent.appendChild(container)
  return container
}

function Overlay({ isOpen, onRequestClose }: Omit<PortalProps, "children">) {
  return isOpen && <div className="mie overlay" onClick={onRequestClose}></div>
}

const OVERLAY_ID = "overlay-root"
const ROOT_ID = "modal-root"

export function Portal({ children, ...props }: PortalProps) {
  const backdrop = createPortal(<Overlay {...props} />, makePortal(OVERLAY_ID))
  const modal = createPortal(children, makePortal(ROOT_ID))

  return (
    <div>
      {backdrop}
      {modal}
    </div>
  )
}
