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

export function CardPage() {
  return (
    <div className="page cards">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Card"
            subtitle="Example of different cards"
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

        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}