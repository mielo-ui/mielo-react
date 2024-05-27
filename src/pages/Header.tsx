import * as Adw from "../../"

export function HeaderPage() {
  return (
    <div className="page header">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Header"
            subtitle="Example of header variants"
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