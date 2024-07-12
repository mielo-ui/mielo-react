import { useState } from "react"

import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

const [times, setTimes] = useState({
  label: "Day",
  value: "day",
})

const options = [
  {
    label: "Morning",
    value: "morning",
  },
  {
    label: "Day",
    value: "day",
  },
  {
    label: "Night",
    value: "night",
  },
]

<Adw.Select
  onChange={option => setTimes(option)}
  options={options}
  label="Times"
  value={times}
  name="times"
/>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-1"

  message="Some warning status"
  accent="warning"
/>

<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-2"

  message="Some error status"
  accent="error"
/>

<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="a-3"

  message="Some success status"
  accent="success"
/>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-1"
  message="Some warning status"
  accent="warning"
  size="small"
/>

<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-2"
  message="Some error status"
  accent="error"
/>

<Adw.Select
  onChange={option => setSecond(option)}
  label="Select..."
  options={options}
  value={second}
  name="c-3"
  message="Some success status"
  accent="success"
  size="large"
/>
`.trim()

export function SelectPage() {
  const [times, setTimes] = useState({
    label: "Day",
    value: "day",
  })

  const optionsTimes = [
    {
      label: "Morning",
      value: "morning",
    },
    {
      label: "Day",
      value: "day",
    },
    {
      label: "Night",
      value: "night",
    },
  ]

  const [second, setSecond] = useState<any>({
    label: "Option First Label",
    value: "option-1",
  })

  const options = [
    {
      label: "Option First Label",
      value: "option-1",
    },
    {
      label: "Option Second Label",
      value: "option-2",
    },
    {
      label: "Option Third Label",
      value: "option-3",
    },
  ]

  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Select"
            subtitle="Different select variants"
            size="large"
            center
          />
        }
      >
        <ComponentGroup
          title="Default"
          code={{
            jsx: DEFAULT_TYPESCRIPT,
          }}
        >
          <Adw.Select
            onChange={option => setTimes(option)}
            options={optionsTimes}
            label="Times"
            value={times}
            name="times"
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
          }}
        >
          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="a-1"
            message="Some warning status"
            accent="warning"
          />

          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="a-2"
            message="Some error status"
            accent="error"
          />

          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="a-3"
            message="Some success status"
            accent="success"
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
          }}
        >
          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="c-1"
            message="Some warning status"
            accent="warning"
            size="small"
          />

          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="c-2"
            message="Some error status"
            accent="error"
          />

          <Adw.Select
            onChange={option => setSecond(option)}
            label="Select..."
            options={options}
            value={second}
            name="c-3"
            message="Some success status"
            accent="success"
            size="large"
          />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}