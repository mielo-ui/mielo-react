import { useState } from "react"
import * as Adw from "../../"

export function DialogPage() {
  const [firstOpened, setFirstOpened] = useState(false)

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
              onRequestClose={() => setFirstOpened(false)}
              isOpen={firstOpened}
              attached="modal"
              theme="dark"
            >
              <Adw.Header title="Save Changes?" attached="dialog" center />
              <Adw.Dialog.Content>
                <Adw.Text.Paragraph center>
                  Open document contains unsaved changes.
                </Adw.Text.Paragraph>
              </Adw.Dialog.Content>
              <Adw.Dialog.Actions>
                <Adw.Dialog.Action
                  onClick={() => setFirstOpened(false)}
                  label="Cancel"
                />
                <Adw.Dialog.Action
                  onClick={() => setFirstOpened(false)}
                  label="Discard"
                  accent="red"
                />
                <Adw.Dialog.Action
                  onClick={() => setFirstOpened(false)}
                  label="Save"
                  accent="blue"
                />
              </Adw.Dialog.Actions>
            </Adw.Dialog>
            <Adw.Button
              onClick={() => {
                setFirstOpened(true)
                // setTimeout(() => setFirstOpened(false), 5000)
              }}
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