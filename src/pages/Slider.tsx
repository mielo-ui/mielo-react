import * as Adw from "../../"

export function SliderPage() {
  return (
    <div className="page slider">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Slider"
            subtitle="Example of slider variants"
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