import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Header
  title="Union Header"
  subtitle="Subtitle of default header"
/>
`.trim()

const DEFAULT_HTML = `
<div class="adw header center">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Subtitle of default header</div>
  </div>
</div>
`.trim()

const ICON_TYPESCRIPT = `
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
/>

<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
  iconSided
/>
`.trim()

const ICON_HTML = `
<div class="adw header">
  <div class="heading">
    <div class="adw icon">
      <svg>
    </div>

    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header">
  <div class="adw icon">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

`.trim()

const CENTER_TYPESCRIPT = `
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
  size="large"
/>
`.trim()

const CENTER_HTML = `
<div class="adw header center">
  <div class="heading">
    <div class="adw icon">
      <svg>
    </div>
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="tiny" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="tiny"
/>

<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="small" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="small"
/>

<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
  iconSided
/>

<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="large" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="large"
/>
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="big" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="big"
/>
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="huge" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="huge"
/>
<Adw.Header
  title="Icon Header"
  subtitle="Subtitle of icon header"
  icon={<Adw.Icon size="massive" icon={<Adw.Icons.UserHome />} />}
  iconSided
  size="massive"
/>
`.trim()

const SIZES_HTML = `
<div class="adw header size tiny">
  <div class="adw icon tiny">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header size small">
  <div class="adw icon small">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header">
  <div class="adw icon">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header size large">
  <div class="adw icon large">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header size big">
  <div class="adw icon big">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header size huge">
  <div class="adw icon huge">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>

<div class="adw header size massive">
  <div class="adw icon massive">
    <svg>
  </div>

  <div class="heading">
    <div class="title">Icon Header</div>
    <div class="subtitle">Subtitle of icon header</div>
  </div>
</div>
`.trim()

const INVERTED_TYPESCRIPT = `
<Adw.Header
  title="Medium Header"
  subtitle="Subtitle of medium header"
  inverted
/>
`.trim()

const INVERTED_HTML = `
<div class="adw header inverted">
  <div class="heading">
    <div class="title">Medium Header</div>
    <div class="subtitle">Subtitle of medium header</div>
  </div>
</div>
`.trim()

export function HeaderPage() {
  return (
    <div className="page header">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Header"
            subtitle="Different header variants"
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
          <Adw.Header
            title="Union Header"
            subtitle="Subtitle of default header"
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
            html: ICON_HTML,
          }}
        >
          <div className="adw view transparent flex column">
            <Adw.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
            />
            <Adw.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
              iconSided
            />
          </div>
        </ComponentGroup>

        <ComponentGroup
          title="Centered"
          code={{
            jsx: CENTER_TYPESCRIPT,
            html: CENTER_HTML,
          }}
        >
          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
            center
          />
        </ComponentGroup>

        <ComponentGroup
          title="Inverted"
          containerColumn
          code={{
            jsx: INVERTED_TYPESCRIPT,
            html: INVERTED_HTML,
          }}
        >
          <Adw.Header
            title="Medium Header"
            subtitle="Subtitle of medium header"
            inverted
          />
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          containerColumn
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="tiny" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="tiny"
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="small" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="small"
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon icon={<Adw.Icons.UserHome />} />}
            iconSided
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="large" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="large"
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="big" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="big"
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="huge" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="huge"
          />

          <Adw.Header
            title="Icon Header"
            subtitle="Subtitle of icon header"
            icon={<Adw.Icon size="massive" icon={<Adw.Icons.UserHome />} />}
            iconSided
            size="massive"
          />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}