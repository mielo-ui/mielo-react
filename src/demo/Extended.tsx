import * as Adw from "../../"

export function ExtendedDemoPage() {
  return (
    <div className="page buttons">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Extended Demo"
            subtitle="Simple apps using adwaita components"
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