import { ReactNode } from "react"

export interface AlertProps {
  children?: ReactNode
}

export function Alert({ children }: AlertProps) {
  return <div className="mie alert">{children}</div>
}

Alert.displayName = "Mie.Alert"
