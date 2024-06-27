import * as Adw from "../../"

export function IconsPage() {
  return (
    <div className="page message">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Message"
            subtitle="Example of message variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">

          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}