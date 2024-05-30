import * as Adw from "../../"

export function TabPage() {
  return (
    <div className="page typography">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Tabs"
            subtitle="Example of tabs variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Stack Header" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex"></div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}