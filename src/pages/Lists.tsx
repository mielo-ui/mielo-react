import * as Adw from "../../"

export function ListPage() {
  return (
    <div className="page lists">
      <Adw.Clamp
        header={
          <Adw.Header
            title="List"
            subtitle="Example of different list variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item header="Some text..." activatable />
              <Adw.List.Item header="Some text..." activatable />
              <Adw.List.Item header="Some text..." activatable />
            </ul>
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item
                header="Some text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
              <Adw.List.Item
                header="Some text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
              <Adw.List.Item
                header="Some text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
            </ul>
          </div>
        </Adw.Segment>

        <Adw.Header title="Full Header + Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
              <Adw.List.Item
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
              <Adw.List.Item
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
              />
            </ul>
          </div>
        </Adw.Segment>

        <Adw.Header title="With Actions" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                activatable
                right={
                  <>
                    <Adw.Button
                      icon={<Adw.Icons.FolderNew />}
                      iconLabeled
                      accent="blue"
                      label="Label"
                    />
                  </>
                }
              />
              <Adw.List.Item
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                iconStyle="circular"
                activatable
                right={
                  <>
                    <Adw.Button
                      icon={<Adw.Icons.FolderNew />}
                      iconLabeled
                      accent="blue"
                      label="Label"
                    />
                  </>
                }
              />
            </ul>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}
