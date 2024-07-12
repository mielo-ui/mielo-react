import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

// ...

<Adw.Button label="Button" />
`.trim()

const DEFAULT_HTML = `
<div class="adw button">
  Button
</div>
`.trim()

export function TabPage() {
  return (
    <div className="page tabs">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Tabs"
            subtitle="Example of different tabs"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
            html: DEFAULT_HTML,
          }}
        >
          <Adw.Button label="Button" />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}