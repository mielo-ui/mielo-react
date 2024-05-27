import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export interface PortalProps {
  children: React.ReactNode
  id: string
}

export function createContainer(
  id: string,
  parent: HTMLElement = document.body,
) {
  if (document.getElementById(id)) {
    return
  }

  const container = document.createElement("div")
  container.setAttribute("id", id)
  parent.appendChild(container)
}

function Portal({ id, children }: PortalProps) {
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id)

      if (!portalContainer) {
        throw new Error(`Parent container '${id}' not found.`)
      }

      setContainer(portalContainer)
    }
  }, [id])

  return container ? createPortal(children, container) : null
}

export default Object.assign(Portal, {
  createContainer,
})
