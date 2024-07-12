import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.List>
  <Adw.List.Item title="Some text..." activatable />
  <Adw.List.Item title="Some text..." activatable />
  <Adw.List.Item title="Some text..." activatable />
</Adw.List>
`.trim()

const DEFAULT_HTML = `
<div class="adw list">
  <div class="adw item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="adw item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
  <div class="adw item list activatable">
    <div class="content">
      <div class="title">Some text...</div>
    </div>
  </div>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Adw.List>
  <Adw.List.Item
    accent="warning"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
  <Adw.List.Item
    accent="error"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
  <Adw.List.Item
    accent="success"
    title="Title"
    description="Lorem ipsum description"
    activatable
  />
</Adw.List>
`.trim()

const ACCENTS_HTML = `
<div class="adw list">
  <div class="adw item warning list warning activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="adw item error list error activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="adw item success list success activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.List>
  <Adw.List.Item
    description="Lorem ipsum description"
    accent="warning"
    title="Small Title"
    size="small"
    activatable
  />
  <Adw.List.Item
    description="Lorem ipsum description"
    accent="error"
    title="Default Title"
    activatable
  />
  <Adw.List.Item
    description="Lorem ipsum description"
    accent="success"
    title="Large Title"
    size="large"
    activatable
  />
</Adw.List>
`.trim()

const SIZES_HTML = `
<div class="adw list">
  <div class="adw item warning small list warning activatable">
    <div class="content">
      <div class="title">Small Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="adw item error list error activatable">
    <div class="content">
      <div class="title">Default Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
  <div class="adw item success large list success activatable">
    <div class="content">
      <div class="title">Large Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>
</div>
`.trim()

const EXPO_TYPESCRIPT = `
<Adw.List>
  <Adw.List.Item title="Title" activatable />
  <Adw.List.Item
    icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
    title="Title"
    activatable
  />
  <Adw.List.Item
    description="Lorem ipsum description"
    title="Title"
    activatable
  />
  <Adw.List.Item
    icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
    description="Lorem ipsum description"
    title="Title"
    activatable
  />
  <Adw.List.Item
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
  <Adw.List.Item
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
</Adw.List>
`.trim()

const EXPO_HTML = `
<div class="adw list">
  <div class="adw item list activatable">
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="adw item list activatable">
    <div class="indicator">
      <div class="adw icon">
        <svg />
      </div>
    </div>
    
    <div class="content">
      <div class="title">Title</div>
    </div>
  </div>

  <div class="adw item list activatable">
    <div class="content">
      <div class="title">Title</div>
      <div class="description">Lorem ipsum description</div>
    </div>
  </div>

  <div class="adw item list activatable">
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

  <div class="adw item list activatable">
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

  <div class="adw item list activatable">
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
            <svg/>
          </div>
        </div>
      </button>
    </div>
  </div>
</div>
`.trim()

export function ListPage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="List"
            subtitle="Different lists variants"
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
          <Adw.List>
            <Adw.List.Item title="Some text..." activatable />
            <Adw.List.Item title="Some text..." activatable />
            <Adw.List.Item title="Some text..." activatable />
          </Adw.List>
        </ComponentGroup>

        <ComponentGroup
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Adw.List>
            <Adw.List.Item
              accent="warning"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
            <Adw.List.Item
              accent="error"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
            <Adw.List.Item
              accent="success"
              title="Title"
              description="Lorem ipsum description"
              activatable
            />
          </Adw.List>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.List>
            <Adw.List.Item
              description="Lorem ipsum description"
              accent="warning"
              title="Small Title"
              size="small"
              activatable
            />
            <Adw.List.Item
              description="Lorem ipsum description"
              accent="error"
              title="Default Title"
              activatable
            />
            <Adw.List.Item
              description="Lorem ipsum description"
              accent="success"
              title="Large Title"
              size="large"
              activatable
            />
          </Adw.List>
        </ComponentGroup>

        <ComponentGroup
          title="Variants"
          containerColumn
          code={{
            jsx: EXPO_TYPESCRIPT,
            html: EXPO_HTML,
          }}
        >
          <Adw.List>
            <Adw.List.Item title="Title" activatable />
            <Adw.List.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Title"
              activatable
            />
            <Adw.List.Item
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Adw.List.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              description="Lorem ipsum description"
              title="Title"
              activatable
            />
            <Adw.List.Item
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
            <Adw.List.Item
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
          </Adw.List>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}