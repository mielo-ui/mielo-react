import { useState } from "react"
import * as Adw from "../../"

export function EntryPage() {
  const [first, setFirst] = useState("Sample text")

  return (
    <div className="page entries">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Entry"
            subtitle="Example with input fields"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Entry
              placeholder="Username"
              onChange={t => setFirst(t)}
              value={first}
              name="username"
              type="text"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Error" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Entry
              error="Error message"
              placeholder="Username"
              value="Sample text"
              name="username"
              type="text"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Disabled" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Entry
              placeholder="Sample"
              value="Some text"
              name="username"
              type="text"
              disabled
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}