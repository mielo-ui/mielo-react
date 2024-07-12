import { ComponentGroup } from "../components"
import * as Adw from "../../"

import { useState } from "react"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Rows>
  <Adw.Rows.Row />
  <Adw.Rows.Row />
  <Adw.Rows.Row />
</Adw.Rows>
`.trim()

const DEFAULT_HTML = `
<div class="adw rows">
  <div class="adw item row property">
    <div class="content"></div>
  </div>

  <div class="adw item row property">
    <div class="content"></div>
  </div>

  <div class="adw item row property">
    <div class="content"></div>
  </div>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Adw.Rows>
  <Adw.Rows.Row accent="warning" />
  <Adw.Rows.Row accent="error" />
  <Adw.Rows.Row accent="success" />
</Adw.Rows>
`.trim()

const ACCENTS_HTML = `
<div class="adw rows">
  <div class="adw item row property warning">
    <div class="content"></div>
  </div>

  <div class="adw item row property error">
    <div class="content"></div>
  </div>

  <div class="adw item row property success">
    <div class="content"></div>
  </div>
</div>
`.trim()

const ENTRY_TYPESCRIPT = `
const [username, setUsername] = useState("")

<Adw.Rows>
  <Adw.Rows.Entry
    placeholder="Username"
    onChange={nextValue => setUsername(nextValue)}
    value={username}
    name="username"
    type="text"
  />
</Adw.Rows>
`.trim()

const SELECT_TYPESCRIPT = `
<Adw.Rows>
  <Adw.Rows.Select
    onChange={option => setTime(option)}
    label="Select Time"
    options={options}
    value={time}
    name="time"
  />
</Adw.Rows>
`.trim()

const ITEM_TYPESCRIPT = `
<Adw.Rows>
  <Adw.Rows.Row title="Title" activatable />
  
  <Adw.Rows.Row
    icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
    title="Title"
    activatable
  />

  <Adw.Rows.Row
    description="Lorem ipsum description"
    title="Title"
    activatable
  />

  <Adw.Rows.Row
    icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
    description="Lorem ipsum description"
    title="Title"
    activatable
  />

  <Adw.Rows.Row
    description="Lorem ipsum description"
    title="Title"
    activatable
    side={
      <>
        <Adw.Button
          icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
          label="Label"
          size="small"
          accent
        />
      </>
    }
  />

  <Adw.Rows.Row
    icon={<Adw.Icon circular filled icon={<Adw.Icons.FolderNew />} />}
    description="Lorem ipsum description"
    title="Title"
    activatable
    side={
      <>
        <Adw.Button
          icon={<Adw.Icon icon={<Adw.Icons.UserTrash />} />}
          accent="error"
          size="small"
          filled
        />
      </>
    }
  />
</Adw.Rows>
`.trim()

const ITEM_HTML = `
<div class="adw rows">
  <div class="adw item row property">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="adw item row property">
    <div class="indicator">
      <div class="adw icon">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="adw item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="adw item row property">
    <div class="indicator">
      <div class="adw icon">
        <svg />
      </div>
    </div>
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="adw item row property">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>

    <div class="side">
      <button class="adw button content icon accent small">
        <div class="icon">
          <div class="adw icon">
            <svg />
          </div>
        </div>

        Label
      </button>
    </div>
  </div>

  <div class="adw item row property">
    <div class="indicator">
      <div class="adw icon circular filled">
        <svg />
      </div>
    </div>

    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
    
    <div class="side">
      <button class="adw button icon filled error small">
        <div class="icon">
          <div class="adw icon">
            <svg />
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export function RowPage() {
  const [username, setUsername] = useState("my_username")

  const [time, setTime] = useState<any>({
    label: "Night",
    value: "night",
  })

  const options = [
    {
      label: "Night",
      value: "night",
    },
    {
      label: "Day",
      value: "day",
    }
  ]

  return (
    <div className="page rows">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Rows"
            subtitle="Different row variants"
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
          <Adw.Rows>
            <Adw.Rows.Row />
            <Adw.Rows.Row />
            <Adw.Rows.Row />
          </Adw.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Adw.Rows>
            <Adw.Rows.Row accent="warning" />
            <Adw.Rows.Row accent="error" />
            <Adw.Rows.Row accent="success" />
          </Adw.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Row Item"
          code={{
            jsx: ITEM_TYPESCRIPT,
            html: ITEM_HTML,
          }}
        >
          <Adw.Rows>
            <Adw.Rows.Row title="Title" activatable />
            <Adw.Rows.Row
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Title"
              activatable
            />
            <Adw.Rows.Row
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Adw.Rows.Row
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Adw.Rows.Row
              description="Lorem ipsum description"
              title="Title"
              activatable
              side={
                <>
                  <Adw.Button
                    icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
                    label="Label"
                    size="small"
                    accent
                  />
                </>
              }
            />
            <Adw.Rows.Row
              icon={<Adw.Icon circular filled icon={<Adw.Icons.FolderNew />} />}
              description="Lorem ipsum description"
              title="Title"
              activatable
              side={
                <>
                  <Adw.Button
                    icon={<Adw.Icon icon={<Adw.Icons.UserTrash />} />}
                    accent="error"
                    size="small"
                    filled
                  />
                </>
              }
            />
          </Adw.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Entry Row"
          code={{
            jsx: ENTRY_TYPESCRIPT,
          }}
        >
          <Adw.Rows>
            <Adw.Rows.Entry
              placeholder="Username"
              onChange={nextValue => setUsername(nextValue)}
              value={username}
              name="username"
              type="text"
            />
          </Adw.Rows>
        </ComponentGroup>

        <ComponentGroup
          title="Select Row"
          code={{
            jsx: SELECT_TYPESCRIPT,
          }}
        >
          <Adw.Rows>
            <Adw.Rows.Select
              onChange={option => setTime(option)}
              label="Select Time"
              options={options}
              value={time}
              name="time"
            />
          </Adw.Rows>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}