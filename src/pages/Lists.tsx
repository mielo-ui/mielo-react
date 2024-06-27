import * as Adw from "../../"

export function ListPage() {
  return (
    <div className="page lists">
      <Adw.Clamp
        header={
          <Adw.Header
            title="List"
            subtitle="Example of different list variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item title="Some text..." activatable />
              <Adw.List.Item title="Some text..." activatable />
              <Adw.List.Item title="Some text..." activatable />
            </ul> 
          </div>
        </Adw.Segment>

        <Adw.Header title="Accent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item accent="warning" title="Some text..." activatable />
              <Adw.List.Item accent="error" title="Some text..." activatable />
              <Adw.List.Item accent="success" title="Some text..." activatable />
            </ul> 
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <ul className="adw list">
              <Adw.List.Item
                title="Some text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
                activatable
              />
              <Adw.List.Item
                title="Some text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
                activatable
              />
              <Adw.List.Item
                title="Some text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
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
                title="My header"
                description="Some description text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
                activatable
              />
              <Adw.List.Item
                title="My header"
                description="Some description text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
                activatable
              />
              <Adw.List.Item
                title="My header"
                description="Some description text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
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
                title="My header"
                description="Some description text..."
                icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
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
                title="My header"
                description="Some description text..."
                icon={<Adw.Icon circular filled icon={<Adw.Icons.FolderNew />} />}
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
            </ul>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}
