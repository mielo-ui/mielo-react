import * as Adw from "../../"

export function HeaderBarPage() {
  return (
    <div className="page buttons">
      <Adw.Clamp
        header={
          <Adw.Header
            subtitle="Example of different headerbar variants"
            title="HeaderBar"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.HeaderBar
              header={<Adw.Header title="Title" subtitle="Subtitle" />}
              left={<Adw.Button icon={<Adw.Icons.UserHome />} />}
              right={<Adw.Button icon={<Adw.Icons.UserTrash />} />}
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}