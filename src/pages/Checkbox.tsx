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
              style="circular"
              label="Default"
              checked
            />
            <Adw.Checkbox
              name="circular-default-2"
              style="circular"
              label="Default Checked"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Toggle" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Checkbox
              name="toggle-default-1"
              style="toggle"
              label="Toggle Checked"
              checked
            />

            <Adw.Checkbox
              name="toggle-default-2"
              style="toggle"
              label="Toggle"
            />

            <Adw.Checkbox
              name="toggle-default-3"
              style="toggle"
              label="Toggle Indicator Icon"
              icon={{
                indicator: {
                  unchecked: <Adw.Icons.WeatherClearNight />,
                  checked: <Adw.Icons.WeatherClear />,
                },
              }}
            />

            <Adw.Checkbox
              name="toggle-default-4"
              style="toggle"
              label="Toggle Layout Icon"
              icon={{
                layout: {
                  unchecked: <Adw.Icons.WeatherClearNight />,
                  checked: <Adw.Icons.WeatherClear />,
                },
              }}
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Radio" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Radio name="radio-default-1" label="Default" checked />
            <Adw.Radio name="radio-default-2" label="Default Checked" />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}