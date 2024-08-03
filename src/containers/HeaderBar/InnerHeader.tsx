import { cloneElement, isValidElement } from "react"

import { isCorrectChildrenType, isPlainObject } from "../../utils"
import { Header } from "../../components/Header"
import { InnerHeaderProps } from "./Props"

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