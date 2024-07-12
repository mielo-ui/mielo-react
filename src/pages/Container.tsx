import * as Adw from "../../"
import { ComponentGroup } from "../components"

const VIEW_TYPESCRIPT = `

`.trim()

const VIEW_HTML = `

`.trim()

const ITEM_TYPESCRIPT = `

`.trim()

const ITEM_HTML = `

`.trim()

export function ContainerPage() {
  return (
    <div className="page container">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Container"
            subtitle="Example of container variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="View"
          code={{
            jsx: VIEW_TYPESCRIPT,
            html: VIEW_HTML,
          }}
        >
          <Adw.View bg="transparent" flex flex1 column>
            <div className="adw view padding flex column rounded"></div>
            <div className="adw view view-bg container-bg padding flex column rounded"></div>
            <div className="adw view container-bg padding flex column rounded"></div>
          </Adw.View>
        </ComponentGroup>

        <ComponentGroup
          title="Item"
          code={{
            jsx: ITEM_TYPESCRIPT,
            html: ITEM_HTML,
          }}
        >
          <Adw.View bg="transparent" flex flex1 column>
            <Adw.Item title="Item Title" description="Description line" />
            <Adw.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Item Title"
            />
            <Adw.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Vertical Item Title"
              description="Description message"
              vertical
              center
            />
            <Adw.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              description="Some description text"
              title="Item Title"
              side={
                <Adw.Button
                  icon={<Adw.Icons.UserTrash />}
                  accent="error"
                  size="small"
                  circular
                />
              }
            />
          </Adw.View>
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}