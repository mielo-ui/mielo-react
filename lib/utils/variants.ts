export const variantToClass = (
  prefix: string,
  variant?: boolean | string,
  directly = false,
) => {
  if (!variant) {
    return undefined
  }

  if (typeof variant === "string") {
    const separator = directly ? "-" : " "
    return `${prefix}${separator}${variant}`
  } else {
    return prefix
  }
}
