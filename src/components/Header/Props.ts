export type HeaderSize =
  | "tiny"
  | "small"
  | "small"
  | "large"
  | "big"
  | "huge"
  | "massive"

export interface HeaderProps {
  icon?: JSX.Element
  subtitle?: string
  title?: string

  className?: string
  size?: HeaderSize

  iconSided?: boolean
  flattened?: boolean
  inverted?: boolean
  center?: boolean
}
