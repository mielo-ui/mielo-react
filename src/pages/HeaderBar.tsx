import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.HeaderBar
  header={<Adw.Header title="Title" subtitle="Subtitle" />}
  left={<Adw.Button icon={<Adw.Icons.UserHome />} />}
  right={<Adw.Button icon={<Adw.Icons.UserTrash />} />}
/>
`.trim()

export function HeaderBarPage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            subtitle="Different headerbar variants"
            title="HeaderBar"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
          }}
        >
          <div className="adw view flex column rounded-6">
            <Adw.HeaderBar
              header={<Adw.Header title="Title" subtitle="Subtitle" />}
              left={<Adw.Button icon={<Adw.Icons.UserHome />} />}
              right={<Adw.Button icon={<Adw.Icons.UserTrash />} />}
            />
          </div>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}