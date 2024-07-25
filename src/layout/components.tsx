import { layoutElement } from "./builder"
import * as components from "../components"

export const ButtonGroup = layoutElement(components.Button, {
  flex: false,
})
export const Button = Object.assign(
  layoutElement(components.Button, { flex: false }),
  {
    Group: ButtonGroup,
  },
)

export const Entry = layoutElement(components.Entry, { flex: false })
export const Select = layoutElement(components.Select, { flex: false })
export const Radio = layoutElement(components.Radio, { flex: false })
export const Checkbox = layoutElement(components.Checkbox, {
  flex: false,
})

export const Icon = layoutElement(components.Icon, { flex: false })
export const Item = layoutElement(components.Item, { flex: false })

export const ProgressBar = layoutElement(components.ProgressBar)
export const Progress = Object.assign(
  layoutElement(components.Progress, {
    flex: false,
  }),
  {
    Bar: ProgressBar,
  },
)

export const Header = layoutElement(components.Header, { flex: false })
export const Text = layoutElement(components.Text, { flex: false })
