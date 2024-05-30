import * as Adw from "../../"

export function CardPage() {
  return (
    <div className="page card">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Card"
            subtitle="Example of card variants"
            size="large"
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