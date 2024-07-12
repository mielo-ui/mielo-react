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

const ACCENT_COLORS_TYPESCRIPT = `
<Adw.Button label="Accent" accent />
<Adw.Button label="Success" accent="success" />
<Adw.Button label="Warning" accent="warning" />
<Adw.Button label="Error" accent="error" />
`.trim()

const ACCENT_COLORS_HTML = `
<button class="adw button accent">Accent</button>
<button class="adw button success">Success</button>
<button class="adw button warning">Warning</button>
<button class="adw button error">Error</button>
`.trim()

const TRANSPARENT_TYPESCRIPT = `
<Adw.Button label="Transparent" transparent />
<Adw.Button label="Accent" transparent accent />
<Adw.Button label="Success" transparent accent="success" />
<Adw.Button label="Warning" transparent accent="warning" />
<Adw.Button label="Error" transparent accent="error" />
`.trim()

const TRANSPARENT_HTML = `
<button class="adw button accent transparent">Accent</button>
<button class="adw button success transparent">Success</button>
<button class="adw button warning transparent">Warning</button>
<button class="adw button error transparent">Error</button>
`.trim()

const TERTIARY_TYPESCRIPT = `
<Adw.Button label="Transparent" transparent />
<Adw.Button label="Accent" transparent accent />
<Adw.Button label="Success" transparent accent="success" />
<Adw.Button label="Warning" transparent accent="warning" />
<Adw.Button label="Error" transparent accent="error" />
`.trim()

const TERTIARY_HTML = `
<button class="adw button accent transparent">Accent</button>
<button class="adw button success transparent">Success</button>
<button class="adw button warning transparent">Warning</button>
<button class="adw button error transparent">Error</button>
`.trim()

const FILLED_TYPESCRIPT = `
<Adw.Button label="Filled" filled />
<Adw.Button label="Accent" filled accent />
<Adw.Button label="Success" filled accent="success" />
<Adw.Button label="Warning" filled accent="warning" />
<Adw.Button label="Error" filled accent="error" />
`.trim()

const FILLED_HTML = `
<button class="adw button filled accent">Accent</button>
<button class="adw button filled success">Success</button>
<button class="adw button filled warning">Warning</button>
<button class="adw button filled error">Error</button>
`.trim()

const PILLED_TYPESCRIPT = `
<Adw.Button pilled label="Pilled" />
<Adw.Button pilled label="Accent" accent />
<Adw.Button pilled label="Success" accent="success" />
<Adw.Button pilled label="Warning" accent="warning" />
<Adw.Button pilled label="Error" accent="error" />
`.trim()

const PILLED_HTML = `
<button class="adw button pilled">Pilled</button>
<button class="adw button pilled accent">Accent</button>
<button class="adw button pilled success">Success</button>
<button class="adw button pilled warning">Warning</button>
<button class="adw button pilled error">Error</button>
`.trim()

const ICON_TYPESCRIPT = `
<Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
<Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} circular />
<Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} label="Label" />
<Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} iconLabeled label="Label" 

<Adw.Button
  icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
  iconLabeled
  label="Label"
  accent
/>

<Adw.Button
  icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
  iconLabeled
  label="Label"
  filled
  accent
/>
`.trim()

const ICON_HTML = `
<button class="adw button icon">
  <div class="icon">
    <svg />
  </div>
</button>

<button class="adw button icon circular">
  <div class="icon">
    <svg />
  </div>
</button>

<button class="adw button content icon">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="adw button labeled content icon">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="adw button labeled content icon accent">
  <div class="icon">
    <svg />
  </div>
  Label
</button>

<button class="adw button labeled content icon filled accent">
  <div class="icon">
    <svg />
  </div>
  Label
</button>
`.trim()

const GROUPS_TYPESCRIPT = `
<div className="adw buttons">
  <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
  <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
</div>

<div className="adw buttons">
  <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} label="Label" />
  <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} label="Label" />
</div>
`.trim()

const GROUPS_HTML = `
<div class="adw buttons">
  <button class="adw button icon">
    <div class="icon">
      <svg />
    </div>
  </button>

  <button class="adw button icon">
    <div class="icon">
      <svg />
    </div>
    Label
  </button>

  <button class="adw button content icon">
    <div class="icon">
      <svg />
    </div>
    
    Label
  </button>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Button label="Small" size="small" />
<Adw.Button label="Medium Default" />
<Adw.Button label="Large" size="large" />
`.trim()

const SIZES_HTML = `
  <button class="adw button small">
    Small
  </button>

  <button class="adw button">
    Medium Default
  </button>

  <button class="adw button large">
    Large
  </button>
`.trim()

export function ButtonPage() {
  return (
    <div className="page buttons">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Buttons"
            subtitle="Different button variants & groups"
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

        <ComponentGroup
          title="Accent Colors"
          code={{
            jsx: ACCENT_COLORS_TYPESCRIPT,
            html: ACCENT_COLORS_HTML,
          }}
        >
          <Adw.Button label="Accent" accent />
          <Adw.Button label="Success" accent="success" />
          <Adw.Button label="Warning" accent="warning" />
          <Adw.Button label="Error" accent="error" />
        </ComponentGroup>

        <ComponentGroup
          title="Transparent"
          code={{
            jsx: TRANSPARENT_TYPESCRIPT,
            html: TRANSPARENT_HTML,
          }}
        >
          <Adw.Button label="Transparent" transparent />
          <Adw.Button label="Accent" transparent accent />
          <Adw.Button label="Success" transparent accent="success" />
          <Adw.Button label="Warning" transparent accent="warning" />
          <Adw.Button label="Error" transparent accent="error" />
        </ComponentGroup>

        <ComponentGroup
          title="Tertiary"
          code={{
            jsx: TERTIARY_TYPESCRIPT,
            html: TERTIARY_HTML,
          }}
        >
          <Adw.Button label="Transparent" transparent tertiary />
          <Adw.Button label="Accent" transparent tertiary accent />
          <Adw.Button label="Success" transparent tertiary accent="success" />
          <Adw.Button label="Warning" transparent tertiary accent="warning" />
          <Adw.Button label="Error" transparent tertiary accent="error" />
        </ComponentGroup>

        <ComponentGroup
          title="Filled"
          code={{
            jsx: FILLED_TYPESCRIPT,
            html: FILLED_HTML,
          }}
        >
          <Adw.Button label="Filled" filled />
          <Adw.Button label="Accent" filled accent />
          <Adw.Button label="Success" filled accent="success" />
          <Adw.Button label="Warning" filled accent="warning" />
          <Adw.Button label="Error" filled accent="error" />
        </ComponentGroup>

        <ComponentGroup
          title="Pilled"
          code={{
            jsx: PILLED_TYPESCRIPT,
            html: PILLED_HTML,
          }}
        >
          <Adw.Button pilled label="Pilled" />
          <Adw.Button pilled label="Accent" accent />
          <Adw.Button pilled label="Success" accent="success" />
          <Adw.Button pilled label="Warning" accent="warning" />
          <Adw.Button pilled label="Error" accent="error" />
        </ComponentGroup>

        <ComponentGroup
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
            html: ICON_HTML,
          }}
        >
          <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
          <Adw.Button
            icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
            circular
          />
          <Adw.Button
            icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
            label="Label"
          />
          <Adw.Button
            icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
            iconLabeled
            label="Label"
          />

          <Adw.Button
            icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
            iconLabeled
            label="Label"
            accent
          />

          <Adw.Button
            icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
            iconLabeled
            label="Label"
            filled
            accent
          />
        </ComponentGroup>

        <ComponentGroup
          title="Groups"
          code={{
            jsx: GROUPS_TYPESCRIPT,
            html: GROUPS_HTML,
          }}
        >
          <div className="adw buttons">
            <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
            <Adw.Button icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />} />
          </div>

          <div className="adw buttons">
            <Adw.Button
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              label="Label"
            />
            <Adw.Button
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              label="Label"
            />
          </div>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.Button label="Small" size="small" />
          <Adw.Button label="Medium Default" />
          <Adw.Button label="Large" size="large" />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}