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
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Select
              onChange={option => setFirst(option)}
              label="Select..."
              options={options}
              value={first}
              name="default"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Accents" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
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
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
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
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}