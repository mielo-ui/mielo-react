import { ReactNode, cloneElement, isValidElement } from "react"

import { isCorrectChildrenType, isPlainObject } from "../../utils"
import { Header, HeaderProps } from "../../components/Header"

export type InnerHeaderProp =
  | ReactNode
  | Pick<HeaderProps, "title" | "subtitle" | "icon">

export interface InnerHeaderProps {
  header?: InnerHeaderProp
}

export function InnerHeader({ header }: InnerHeaderProps) {
  if (!header) {
    return
  }

  const overrideProps = {
    attached: "headerbar",
    actions: undefined,
    size: "medium",
    center: true,
    flattened: true,
  }

  if (isValidElement(header)) {
    if (isCorrectChildrenType(header, "Mie.Header")) {
      return cloneElement<any, any>(header as any, overrideProps)
    } else {
      return header
    }
  } else {
    if (isPlainObject(header)) {
      return <Header {...(header as any)} {...overrideProps} />
    } else {
      return undefined
    }
  }
}