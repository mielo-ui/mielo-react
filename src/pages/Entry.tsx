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

        <Adw.Header title="Accent & Status" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Entry
              message="Error message"
              accent="error"
              placeholder="Username"
              value="Sample text"
              name="username-a-1"
              type="text"
            />
            
            <Adw.Entry
              message="Warning message"
              accent="warning"
              placeholder="Username"
              value="Sample text"
              name="username-a-2"
              type="text"
            />

            <Adw.Entry
              message="Success message"
              accent="success"
              placeholder="Username"
              value="Sample text"
              name="username-a-3"
              type="text"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-1"
              size="small"
              type="text"

              message="Small entry message"
              accent="success"
            />
            
            <Adw.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-2"
              type="text"

              message="Default medium entry message"
              accent="warning"
            />

            <Adw.Entry
              placeholder="Field name"
              value="Small entry size"
              name="username-s-3"
              size="large"
              type="text"

              message="Large entry message"
              accent="error"
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