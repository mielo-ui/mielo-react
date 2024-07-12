import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Progress>
  <Adw.Progress.Bar progress={35} />
</Adw.Progress>

<Adw.Progress>
  <Adw.Progress.Bar progress={65} progressVisible />
</Adw.Progress>
`.trim()

const DEFAULT_HTML = `

`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Progress size="small">
  <Adw.Progress.Bar progress={40} />
</Adw.Progress>

<Adw.Progress>
  <Adw.Progress.Bar progress={60} />
</Adw.Progress>

<Adw.Progress size="big">
  <Adw.Progress.Bar progress={80} />
</Adw.Progress>
`.trim()

const SIZES_HTML = `

`.trim()

const MULTIPLE_TYPESCRIPT = `
<Adw.Progress multiple>
  <Adw.Progress.Bar accent="red" progress={25} />
  <Adw.Progress.Bar accent="green" progress={18} />
  <Adw.Progress.Bar accent="yellow" progress={40} />
</Adw.Progress>

<Adw.Progress multiple>
  <Adw.Progress.Bar progressVisible accent="yellow" progress={30} />
  <Adw.Progress.Bar progressVisible accent="green" progress={20} />
  <Adw.Progress.Bar progressVisible accent="purple" progress={15} />
</Adw.Progress>
`.trim()

const MULTIPLE_HTML = `

`.trim()

export function ProgressPage() {
  return (
    <div className="page progress">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Progress"
            subtitle="Example of different progress"
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
          <Adw.Progress>
            <Adw.Progress.Bar progress={35} />
          </Adw.Progress>

          <Adw.Progress>
            <Adw.Progress.Bar progress={65} progressVisible />
          </Adw.Progress>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.Progress size="small">
            <Adw.Progress.Bar progress={40} />
          </Adw.Progress>

          <Adw.Progress>
            <Adw.Progress.Bar progress={60} />
          </Adw.Progress>

          <Adw.Progress size="big">
            <Adw.Progress.Bar progress={80} />
          </Adw.Progress>
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Multiple"
          code={{
            jsx: MULTIPLE_TYPESCRIPT,
            html: MULTIPLE_HTML,
          }}
        >
          <Adw.Progress multiple>
            <Adw.Progress.Bar accent="red" progress={25} />
            <Adw.Progress.Bar accent="green" progress={18} />
            <Adw.Progress.Bar accent="yellow" progress={40} />
          </Adw.Progress>

          <Adw.Progress multiple>
            <Adw.Progress.Bar progressVisible accent="yellow" progress={30} />
            <Adw.Progress.Bar progressVisible accent="green" progress={20} />
            <Adw.Progress.Bar progressVisible accent="purple" progress={15} />
          </Adw.Progress>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}