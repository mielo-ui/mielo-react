import { ComponentGroup } from "../components"
import * as Adw from "../../"
import { useState } from "react"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

const [time, setTime] = useState("day")

<Adw.Radio
  onChange={event => setTime(event.target.value)}
  checked={time === "day"}
  name="time"
  value="day"
  label="Day"
/>

<Adw.Radio
  onChange={event => setTime(event.target.value)}
  checked={time === "night"}
  name="time"
  value="night"
  label="Night"
/>
`.trim()

const ACCENT_TYPESCRIPT = `
<Adw.Radio
  name="radio-accent-1"
  label="Warning"
  accent="warning"
  value="warning"
  checked
/>

<Adw.Radio
  name="radio-accent-1"
  label="Success"
  accent="success"
  value="success"
  checked
/>

<Adw.Radio
  name="radio-accent-1"
  label="Error"
  accent="error"
  value="error"
  checked
/>
`.trim()

const SIZES_TYPESCRIPT = `
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
`.trim()

export function RadioPage() {
  const [time, setTime] = useState("day")

  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Radio"
            subtitle="Example of different checkbox & radio variants"
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
          <Adw.Radio
            onChange={event => setTime(event.target.value)}
            checked={time === "day"}
            name="time"
            value="day"
            label="Day"
          />
          <Adw.Radio
            onChange={event => setTime(event.target.value)}
            checked={time === "night"}
            name="time"
            value="night"
            label="Night"
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accent"
          code={{
            jsx: ACCENT_TYPESCRIPT,
          }}
        >
          <Adw.Radio
            name="radio-accent-1"
            label="Warning"
            accent="warning"
            value="warning"
            checked
          />

          <Adw.Radio
            name="radio-accent-1"
            label="Success"
            accent="success"
            value="success"
            checked
          />

          <Adw.Radio
            name="radio-accent-1"
            label="Error"
            accent="error"
            value="error"
            checked
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
          }}
        >
          <Adw.Radio
            name="sizes-accent-1"
            label="Large"
            accent="warning"
            size="large"
            checked
          />
          <Adw.Radio
            name="sizes-accent-3"
            label="Medium"
            accent="success"
            checked
          />
          <Adw.Radio
            name="sizes-accent-2"
            label="Small"
            accent="error"
            size="small"
            checked
          />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}