import { useState } from "react"
import * as Adw from "../../"

export function SelectPage() {
  const [first, setFirst] = useState<any>()

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
    <div className="page selects">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Select"
            subtitle="Example of different select variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Select
              onChange={option => setFirst(option)}
              placeholder="Please select option"
              options={options}
              value={first}
            />

            <Adw.Select
              onChange={option => setSecond(option)}
              placeholder="Please select option"
              options={options}
              value={second}
              error="Some error status"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Compact" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Select
              onChange={option => setFirst(option)}
              placeholder="Please select option"
              options={options}
              value={first}
              compact
            />

            <Adw.Select
              onChange={option => setSecond(option)}
              placeholder="Please select option"
              options={options}
              value={second}
              error="Some error status"
              compact
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}