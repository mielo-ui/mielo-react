import { ReactNode } from "react"

export function isCorrectChildrenType(element: any, allowed: string[] | string) {
  return typeof element.type === "function" &&
    element.type.displayName &&
    Array.isArray(allowed)
    ? allowed.includes(element.type.displayName)
    : element.type.displayName === allowed
}

export function filterChildrenByType(children: ReactNode, allowed: string[]) {
  const filterElement = (element: any) =>
    typeof element.type === "function" &&
    element.type.displayName &&
    allowed.includes(element.type.displayName)

  if (Array.isArray(children)) {
    return children.filter(filterElement)
  } else {
    return filterElement(children)
  }
}
