import { useState } from "react"
import * as Adw from "../../"

export function RowPage() {
  const [first, setFirst] = useState("Sample text")

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
    <div className="page rows">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Rows"
            subtitle="Example of different row variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Rows>
              <Adw.Rows.Row
                header="My header"
                description="Some description text..."
                icon={<Adw.Icons.FolderNew />}
                iconStyle="circular"
                right={
                  <>
                    <Adw.Button
                      icon={<Adw.Icons.FolderNew />}
                      iconLabeled
                      accent="blue"
                      label="Label"
                    />
                  </>
                }
              />

              <Adw.Rows.Entry
                placeholder="Username"
                onChange={t => setFirst(t)}
                value={first}
                name="username"
                type="text"
              />

              <Adw.Rows.Select
                onChange={option => setSecond(option)}
                placeholder="Please select option"
                options={options}
                value={second}
              />
            </Adw.Rows>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}