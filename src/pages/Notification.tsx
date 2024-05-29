import * as Adw from "../../"

export function NotificationPage() {
  return (
    <div className="page notification">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Toast"
            subtitle="Example of notification variants"
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