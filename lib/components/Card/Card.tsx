import { ReactNode } from "react"

export interface CardProps {
  children?: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="adw alert">{children}</div>
}

Card.displayName = "Adw.Card"
