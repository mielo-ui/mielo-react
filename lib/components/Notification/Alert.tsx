import { ReactNode } from "react"

export interface AlertProps {
  children?: ReactNode
}

export function Alert({ children }: AlertProps) {
  return <div className="adw alert">{children}</div>
}

Alert.displayName = "Adw.Alert"
