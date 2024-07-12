import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Icon size="big" icon={<Adw.Icons.UserHome />} />
`.trim()

const DEFAULT_HTML = `
<div class="adw icon big">
  <svg />
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Adw.Icon
  icon={<Adw.Icons.DialogInformation />}
  size="big"
  accent 
/>

<Adw.Icon
  icon={<Adw.Icons.DialogWarning />}
  accent="warning" 
  size="big"
/>

<Adw.Icon
  icon={<Adw.Icons.DialogError />}
  accent="error" 
  size="big"
/>

<Adw.Icon
  icon={<Adw.Icons.EmblemOk />}
  accent="success" 
  size="big"
/>
`.trim()

const ACCENTS_HTML = `
<div class="adw icon big accent">
  <svg>
</div>

<div class="adw icon big warning">
  <svg>
</div>

<div class="adw icon big error">
  <svg>
</div>

<div class="adw icon big success">
  <svg>
</div>
`.trim()

const BG_TYPESCRIPT = `
<Adw.Icon
  icon={<Adw.Icons.DialogInformation />}
  space="large"
  size="big"
  accent
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="big"
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.DialogError />}
  accent="error"
  space="large"
  size="big"
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.EmblemOk />}
  accent="success"
  space="large"
  size="big"
  bg
/>
`.trim()

const BG_HTML = `
<div class="adw icon big accent space-large bg">
  <svg>
</div>

<div class="adw icon big warning space-large bg">
  <svg>
</div>

<div class="adw icon big error space-large bg">
  <svg>
</div>

<div class="adw icon big success space-large bg">
  <svg>
</div>
`.trim()

const FILLED_TYPESCRIPT = `
<Adw.Icon
  icon={<Adw.Icons.DialogInformation />}
  space="large"
  size="big"
  accent
  filled
/>
<Adw.Icon
  icon={<Adw.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="big"
  filled
/>
<Adw.Icon
  icon={<Adw.Icons.DialogError />}
  accent="error"
  space="large"
  size="big"
  filled
/>
<Adw.Icon
  icon={<Adw.Icons.EmblemOk />}
  accent="success"
  space="large"
  size="big"
  filled
/>
`.trim()

const FILLED_HTML = `
<div class="adw icon big accent space-large filled">
  <svg>
</div>

<div class="adw icon big warning space-large filled">
  <svg>
</div>

<div class="adw icon big error space-large filled">
  <svg>
</div>

<div class="adw icon big success space-large filled">
  <svg>
</div>
`.trim()

const ROUNDED_TYPESCRIPT = `
<Adw.Icon
  icon={<Adw.Icons.DialogInformation />}
  rounded="small"
  space="large"
  size="big"
  accent
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.DialogWarning />}
  accent="warning"
  space="large"
  size="huge"
  rounded
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.DialogError />}
  accent="error"
  rounded="large"
  space="large"
  size="big"
  bg
/>

<Adw.Icon
  icon={<Adw.Icons.EmblemOk />}
  accent="success"
  rounded="circle"
  space="large"
  size="big"
  bg
/>
`.trim()

const ROUNDED_HTML = `
<div class="adw icon big accent space-large rounded-small bg">
  <svg>
</div>

<div class="adw icon huge warning space-large rounded bg">
  <svg>
</div>

<div class="adw icon big error space-large rounded-large bg">
  <svg>
</div>

<div class="adw icon big success space-large rounded-circle bg">
  <svg>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Icon icon={<Adw.Icons.UserHome />} size="mini" />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="tiny" />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="small" />
<Adw.Icon icon={<Adw.Icons.UserHome />} />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="large" />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="big" />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="huge" />
<Adw.Icon icon={<Adw.Icons.UserHome />} size="massive" />
`.trim()

const SIZES_HTML = `
<div class="adw icon mini">
  <svg>
</div>

<div class="adw icon tiny">
  <svg>
</div>

<div class="adw icon small">
  <svg>
</div>

<div class="adw icon">
  <svg>
</div>

<div class="adw icon large">
  <svg>
</div>

<div class="adw icon big">
  <svg>
</div>

<div class="adw icon huge">
  <svg>
</div>

<div class="adw icon massive">
  <svg>
</div>
`.trim()

export function IconsPage() {
  return (
    <div className="page icons">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Icons"
            subtitle="Example of different icons"
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
          <Adw.Icon size="big" icon={<Adw.Icons.UserHome />} />
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Adw.Icon accent size="big" icon={<Adw.Icons.DialogInformation />} />
          <Adw.Icon accent="warning" size="big" icon={<Adw.Icons.DialogWarning />} />
          <Adw.Icon accent="error" size="big" icon={<Adw.Icons.DialogError />} />
          <Adw.Icon accent="success" size="big" icon={<Adw.Icons.EmblemOk />} />
        </ComponentGroup>

        <ComponentGroup
          title="Background"
          code={{
            jsx: BG_TYPESCRIPT,
            html: BG_HTML,
          }}
        >
          <Adw.Icon
            icon={<Adw.Icons.DialogInformation />}
            space="large"
            size="big"
            accent
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogWarning />}
            accent="warning"
            space="large"
            size="big"
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogError />}
            accent="error"
            space="large"
            size="big"
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.EmblemOk />}
            accent="success"
            space="large"
            size="big"
            bg
          />
        </ComponentGroup>

        <ComponentGroup
          title="Filled"
          code={{
            jsx: FILLED_TYPESCRIPT,
            html: FILLED_HTML,
          }}
        >
          <Adw.Icon
            icon={<Adw.Icons.DialogInformation />}
            space="large"
            size="big"
            filled
            accent
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogWarning />}
            accent="warning"
            space="large"
            size="big"
            filled
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogError />}
            accent="error"
            space="large"
            size="big"
            filled
          />
          <Adw.Icon
            icon={<Adw.Icons.EmblemOk />}
            accent="success"
            space="large"
            size="big"
            filled
          />
        </ComponentGroup>

        <ComponentGroup
          title="Rounded"
          code={{
            jsx: ROUNDED_TYPESCRIPT,
            html: ROUNDED_HTML,
          }}
        >
          <Adw.Icon
            icon={<Adw.Icons.DialogInformation />}
            rounded="small"
            space="large"
            size="big"
            accent
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogWarning />}
            accent="warning"
            space="large"
            size="huge"
            rounded
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.DialogError />}
            accent="error"
            rounded="large"
            space="large"
            size="big"
            bg
          />
          <Adw.Icon
            icon={<Adw.Icons.EmblemOk />}
            accent="success"
            rounded="circle"
            space="large"
            size="big"
            bg
          />
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="mini" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="tiny" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="small" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="large" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="big" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="huge" />
          <Adw.Icon icon={<Adw.Icons.UserHome />} size="massive" />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}