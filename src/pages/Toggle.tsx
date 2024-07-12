import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

// ...

<Adw.Checkbox
  name="checkbox-default-1"
  label="Default"
  toggle
/>

<Adw.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  checked
  toggle
/>
`.trim()

const ICON_TYPESCRIPT = `
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
`.trim()

const ACCENTS_TYPESCRIPT = `
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
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Checkbox
  name="circular-accent-2"
  label="Small"
  accent="warning"
  size="small"
  checked
  toggle
/>

<Adw.Checkbox
  name="circular-accent-3"
  label="Medium"
  accent="error"
  checked
  toggle
/>

<Adw.Checkbox
  name="circular-accent-1"
  label="Large"
  accent="success"
  size="large"
  checked
  toggle
/>
`.trim()

export function TogglePage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Toggle"
            subtitle="Different toggle variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          containerColumn
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
          }}
        >
          <Adw.Checkbox name="checkbox-default-1" label="Default" toggle />

          <Adw.Checkbox
            name="checkbox-default-2"
            label="Default Checked"
            checked
            toggle
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Icon"
          code={{
            jsx: ICON_TYPESCRIPT,
          }}
        >
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
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
          }}
        >
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
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="SIzes"
          code={{
            jsx: SIZES_TYPESCRIPT,
          }}
        >
          <Adw.Checkbox
            name="circular-accent-2"
            label="Small"
            accent="warning"
            size="small"
            checked
            toggle
          />
          <Adw.Checkbox
            name="circular-accent-3"
            label="Medium"
            accent="error"
            checked
            toggle
          />
          <Adw.Checkbox
            name="circular-accent-1"
            label="Large"
            accent="success"
            size="large"
            checked
            toggle
          />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}