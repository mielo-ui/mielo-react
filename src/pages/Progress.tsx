import * as Adw from "../../"

export function ProgressPage() {
  return (
    <div className="page progress">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Progress"
            subtitle="Example of progress variants"
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