import * as Adw from "../../"

export function TogglePage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Toggle"
            subtitle="Example of different toggle checkboxes"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              name="checkbox-default-1"
              label="Default"
              checked
              toggle
            />
            <Adw.Checkbox
              name="checkbox-default-2"
              label="Default Checked"
              toggle
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              label="Toggle Indicator Icon"
              name="toggle-default-3"
              toggle
              icon={{
                indicator: {
                  unchecked: <Adw.Icons.WeatherClearNight />,
                  checked: <Adw.Icons.WeatherClear />,
                },
              }}
            />

            <Adw.Checkbox
              label="Toggle Layout Icon"
              name="toggle-default-4"
              toggle
              icon={{
                layout: {
                  unchecked: <Adw.Icons.WeatherClearNight />,
                  checked: <Adw.Icons.WeatherClear />,
                },
              }}
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
              checked
              toggle
            />
            <Adw.Checkbox
              name="circular-accent-3"
              label="Success"
              accent="success"
              checked
              toggle
            />
            <Adw.Checkbox
              name="circular-accent-2"
              label="Error"
              accent="error"
              checked
              toggle
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
              toggle
            />
            <Adw.Checkbox
              name="circular-accent-3"
              label="Medium"
              accent="success"
              checked
              toggle
            />
            <Adw.Checkbox
              name="circular-accent-2"
              label="Small"
              accent="error"
              size="small"
              checked
              toggle
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}