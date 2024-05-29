import * as Adw from "../../"

export function ContainerPage() {
  return (
    <div className="page container">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Container"
            subtitle="Example of container variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex"></div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}