import { ComponentGroup } from "../components"
import * as Adw from "../../"

const HEADER_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Header
  title="Union Header"
  subtitle="Example of big header"
  center
/>
`.trim()

const HEADER_HTML = `
<div class="adw header center">
  <div class="heading">
    <div class="title">Union Header</div>
    <div class="subtitle">Example of big header</div>
  </div>
</div>
`.trim()

const TITLES_HTML = `
<h1 className="adw text title">Title 1</h1>
<h2 className="adw text title">Title 2</h2>
<h3 className="adw text title">Title 3</h3>
<h4 className="adw text title">Title 4</h4>
`.trim()

const TEXT_TYPESCRIPT = `
<Adw.Text accent>Accent</Adw.Text>
<Adw.Text accent="success">Success</Adw.Text>
<Adw.Text accent="warning">Warning</Adw.Text>
<Adw.Text accent="error">Error</Adw.Text>
`.trim()

const TEXT_HTML = `
<div className="adw text accent">Accent</div>
<div className="adw text success">Success</div>
<div className="adw text warning">Warning</div>
<div className="adw text error">Error</div>
`.trim()

export function TypographyPage() {
  return (
    <div className="page typography">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Typography"
            subtitle="Example of different checkbox & radio variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          description="For full description open Header component docs"
          title="Stack Header"
          code={{
            jsx: HEADER_TYPESCRIPT,
            html: HEADER_HTML,
          }}
        >
          <Adw.Header
            title="Union Header"
            subtitle="Example of big header"
            center
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Titles"
          code={{
            html: TITLES_HTML,
          }}
        >
          <h1 className="adw text title">Title 1</h1>
          <h2 className="adw text title">Title 2</h2>
          <h3 className="adw text title">Title 3</h3>
          <h4 className="adw text title">Title 4</h4>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Text (with accents)"
          code={{
            jsx: TEXT_TYPESCRIPT,
            html: TEXT_HTML,
          }}
        >
          <Adw.Text accent>Accent</Adw.Text>
          <Adw.Text accent="success">Success</Adw.Text>
          <Adw.Text accent="warning">Warning</Adw.Text>
          <Adw.Text accent="error">Error</Adw.Text>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}