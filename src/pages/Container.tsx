import * as Adw from "../../"

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
        <Adw.Header title="Item" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Header size="small" title="Basic" />

            <Adw.Item title="Item Title" description="Description line" />

            <Adw.Header size="small" title="With Icon" />

            <Adw.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Item Title"
            />

            <Adw.Header size="small" title="Vertical" />

            <Adw.Item
              icon={<Adw.Icon icon={<Adw.Icons.FolderNew />} />}
              title="Vertical Item Title"
              description="Description message"
              vertical
              center
            />

            <Adw.Header size="small" title="Complex" />

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
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}