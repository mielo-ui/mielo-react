import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

<Adw.Message
  title="Basic"
/>

<Adw.Message
  title="With description"
  description="Message description text..."
/>
`.trim()

const BANNER_TYPESCRIPT = `
<Adw.Message
  title="Banner"
  description="Message description text..."
  banner
/>
`.trim()

const ICON_TYPESCRIPT = `
<Adw.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  icon={<Adw.Icon size="large" icon={<Adw.Icons.EmblemOk />} />}
  onClose={() => {}}
/>
`.trim()

const ACCENT_TYPESCRIPT = `
<Adw.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent
/>
<Adw.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="warning"
/>
<Adw.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="error"
/>
<Adw.Message
  title="With description"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  onClose={() => {}}
  accent="success"
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="tiny"
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="small"
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="large"
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="big"
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="huge"
/>
<Adw.Message
  title="Message Title"
  description="Message description text..."
  size="massive"
/>
`.trim()

export function MessagePage() {
  return (
    <div className="page messages">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Message"
            subtitle="Example of different messages"
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
          <Adw.View bg="transparent" flex column>
            <Adw.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onClose={() => {}}
            />
          </Adw.View>
        </ComponentGroup>

        <ComponentGroup
          title="Banner"
          code={{
            jsx: BANNER_TYPESCRIPT,
          }}
        >
          <Adw.Message
            title="Banner"
            description="Message description text..."
            banner
          />
        </ComponentGroup>

        <ComponentGroup
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
          }}
        >
          <Adw.Message
            title="With description"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            icon={<Adw.Icon size="large" icon={<Adw.Icons.EmblemOk />} />}
            onClose={() => {}}
          />
        </ComponentGroup>

        <ComponentGroup
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
          }}
        >
          <Adw.View bg="transparent" flex column>
            <Adw.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={
                <Adw.Icon size="large" icon={<Adw.Icons.DialogInformation />} />
              }
              onClose={() => {}}
              accent
            />

            <Adw.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={
                <Adw.Icon size="large" icon={<Adw.Icons.DialogWarning />} />
              }
              onClose={() => {}}
              accent="warning"
            />

            <Adw.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={<Adw.Icon size="large" icon={<Adw.Icons.DialogError />} />}
              onClose={() => {}}
              accent="error"
            />

            <Adw.Message
              title="With description"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={<Adw.Icon size="large" icon={<Adw.Icons.EmblemOk />} />}
              onClose={() => {}}
              accent="success"
            />
          </Adw.View>
        </ComponentGroup>

        <ComponentGroup
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
          }}
        >
          <Adw.View bg="transparent" flex column>
            <Adw.Message
              icon={<Adw.Icon size="tiny" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="tiny"
            />
            <Adw.Message
              icon={<Adw.Icon size="small" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="small"
            />
            <Adw.Message
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
            />
            <Adw.Message
              icon={<Adw.Icon size="large" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="large"
            />
            <Adw.Message
              icon={<Adw.Icon size="big" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="big"
            />
            <Adw.Message
              icon={<Adw.Icon size="huge" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="huge"
            />
            <Adw.Message
              icon={<Adw.Icon size="massive" icon={<Adw.Icons.FolderNew />} />}
              description="Message description text..."
              title="Message Title"
              size="massive"
            />
          </Adw.View>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}