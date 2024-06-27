import * as Adw from "../../"

export function RadioPage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Radio"
            subtitle="Example of different radio checkboxes"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Radio
              name="radio-default-1"
              label="Default"
            />
            <Adw.Radio
              name="radio-default-2"
              label="Default Checked"
              checked
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Accent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Radio
              name="circular-accent-1"
              label="Warning"
              accent="warning"
              checked
            />
            <Adw.Radio
              name="circular-accent-3"
              label="Success"
              accent="success"
              checked
            />
            <Adw.Radio
              name="circular-accent-2"
              label="Error"
              accent="error"
              checked
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Radio
              name="circular-accent-1"
              label="Large"
              accent="warning"
              size="large"
              checked
            />
            <Adw.Radio
              name="circular-accent-3"
              label="Medium"
              accent="success"
              checked
            />
            <Adw.Radio
              name="circular-accent-2"
              label="Small"
              accent="error"
              size="small"
              checked
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}