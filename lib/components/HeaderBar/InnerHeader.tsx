import { ReactNode, cloneElement, isValidElement } from "react"

import { isCorrectChildrenType, isPlainObject } from "../../utils"
import { Header, HeaderProps } from "../Header"

export type HeaderProp = ReactNode | Pick<HeaderProps, "title" | "subtitle" | "icon">

export interface InnerHeaderProps {
  header?: HeaderProp
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
  }

  if (isValidElement(header)) {
    if (isCorrectChildrenType(header, "Adw.Header")) {
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