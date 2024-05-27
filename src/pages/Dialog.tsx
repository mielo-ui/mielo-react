import { useState } from "react"
import * as Adw from "../../"

export function DialogPage() {
  let [firstOpened, setFirstOpened] = useState(false)

  return (
    <div className="page dialog">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Dialog"
            subtitle="Example of dialog variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Dialog
              onClose={() => setFirstOpened(false)}
              isOpen={firstOpened}
              header={<Adw.Header title="Save Changes?" />}
              content={<p>Open document contains unsaved changes.</p>}
            />
            <Adw.Button
              onClick={() => setFirstOpened(true)}
              label="Open Dialog"
              accent="blue"
              pilled
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}