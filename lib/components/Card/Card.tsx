import { ReactNode } from "react"

export interface CardProps {
  children?: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="mie alert">{children}</div>
}

Card.displayName = "Mie.Card"
