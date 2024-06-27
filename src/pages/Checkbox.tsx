import * as Adw from "../../"

export function CheckboxPage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Checkbox"
            subtitle="Example of different checkbox & radio variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox name="checkbox-default-1" label="Default" checked />
            <Adw.Checkbox name="checkbox-default-2" label="Default Checked" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Circular" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              name="circular-default-1"
              label="Default"
              cicrular
              checked
            />
            <Adw.Checkbox
              name="circular-default-2"
              label="Default Checked"
              cicrular
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Accent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              name="circular-accent-1"
              label="Warning"
              accent="warning"
              cicrular
              checked
            />
            <Adw.Checkbox
              name="circular-accent-3"
              label="Success"
              accent="success"
              cicrular
              checked
            />
            <Adw.Checkbox
              name="circular-accent-2"
              label="Error"
              accent="error"
              cicrular
              checked
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              name="circular-accent-1"
              label="Large"
              accent="warning"
              size="large"
              checked
            />
            <Adw.Checkbox
              name="circular-accent-3"
              label="Medium"
              accent="success"
              checked
            />
            <Adw.Checkbox
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