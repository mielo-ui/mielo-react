import * as components from "../components"
import { layoutElement } from "./builder"

export const Divider = layoutElement(components.Divider, { flex: false })
export const Header = layoutElement(components.Header, { flex: false })
export const Select = layoutElement(components.Select, { flex: false })
export const Entry = layoutElement(components.Entry, { flex: false })
export const Radio = layoutElement(components.Radio, { flex: false })
export const Text = layoutElement(components.Text, { flex: false })
export const Icon = layoutElement(components.Icon, { flex: false })
export const Item = layoutElement(components.Item, { flex: false })
export const Label = layoutElement(components.Label)
export const Image = layoutElement(components.Image)

export const Checkbox = layoutElement(components.Checkbox, {
  flex: false,
})

export const ButtonGroup = layoutElement(components.ButtonGroup, {
  flex: false,
})

export const Button = Object.assign(
  layoutElement(components.Button, {
    rounded: true,
  }),
  {
    Group: ButtonGroup,
  },
)

export const ProgressBar = layoutElement(components.ProgressBar)
export const Progress = Object.assign(
  layoutElement(components.Progress, {
    flex: false,
  }),
  {
    Bar: ProgressBar,
  },
)

