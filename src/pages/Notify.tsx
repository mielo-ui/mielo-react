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

export function NotifyPage() {
  return (
    <div className="page notify">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Notify"
            subtitle="Example of different notify"
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