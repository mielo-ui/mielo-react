import { useCallback, useRef, useState } from "react"
import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

const [modalOpened, setModalOpened] = useState(false)

<Adw.Dialog
  onRequestClose={() => setModalOpened(false)}
  isOpen={modalOpened}
  attached="modal"
  theme="dark"
  actions={
    <>
      <Adw.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Cancel"
      />
      <Adw.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Discard"
        accent="error"
      />
      <Adw.Dialog.Action
        onClick={() => setModalOpened(false)}
        label="Save"
        accent
      />
    </>
  }
>
  <Adw.Header
    title="Save Changes?"
    subtitle="Open document contains unsaved changes. Changes which are not saved will be permanently lost."
    attached="dialog"
    center
  />
</Adw.Dialog>

<Adw.Button
  onClick={() => {
    setModalOpened(true)
  }}

  label="Open Dialog"
  size="large"
  pilled
  accent
/>
`.trim()

const CONFIRM_TYPESCRIPT = `

`.trim()

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
]

const sizes = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "large", value: "large" },
]

const accents = [
  { label: "Without Accent", value: false },
  { label: "Accent", value: true },
  { label: "Warning", value: "warning" },
  { label: "Error", value: "error" },
  { label: "Success", value: "success" },
]

function ConfirmExample() {
  const [lastAction, setLastAction] = useState<any | null>(null)
  const confirmRef = useRef<Adw.ConfirmMethods>(null)

  const [title, setTitle] = useState("Save Changes?")
  const [subtitle, setSubtitle] = useState(
    `
    Open document contains unsaved changes.
    Changes which are not saved will be permanently lost.
  `.trim(),
  )

  const [accent, setAccent] = useState(accents[0])
  const [theme, setTheme] = useState(themes[0])
  const [size, setSize] = useState(sizes[1])

  const onOpenModel = useCallback(async () => {
    if (confirmRef.current) {
      const confirmedAction = await confirmRef.current.confirm()
      setLastAction(confirmedAction)
    }
  }, [])

  return (
    <>
      <Adw.Confirm
        ref={confirmRef}
        accent={accent.value as any}
        theme={theme.value as any}
        size={size.value as any}
        title={title}
        subtitle={subtitle}
      />

      <Adw.View
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        padding
        column
        flex
      >
        <Adw.Rows>
          <Adw.Rows.Entry
            onChange={setTitle}
            placeholder="Accent"
            value={title}
            name="title"
          />
          <Adw.Rows.Entry
            onChange={setSubtitle}
            placeholder="Subtitle"
            value={subtitle}
            name="subtitle"
          />
          <Adw.Rows.Select
            onChange={setTheme}
            options={themes}
            value={theme}
            label="Theme"
            name="theme"
          />
          <Adw.Rows.Select
            onChange={setSize}
            options={sizes}
            value={size}
            label="Size"
            name="size"
          />
          <Adw.Rows.Select
            onChange={setAccent}
            options={accents}
            value={accent}
            label="Accent"
            name="accent"
          />
        </Adw.Rows>

        {lastAction && (
          <Adw.View bg="transparent" flex padding>
            {JSON.stringify(lastAction)}
          </Adw.View>
        )}

        <Adw.Button onClick={onOpenModel} label="Open Confirm" pilled accent />
      </Adw.View>
    </>
  )
}

export function DialogPage() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Dialog"
            subtitle="Different dialog modal variants"
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
          <Adw.Dialog
            onRequestClose={() => setModalOpened(false)}
            isOpen={modalOpened}
            attached="modal"
            theme="dark"
            actions={
              <>
                <Adw.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Cancel"
                />
                <Adw.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Discard"
                  accent="error"
                />
                <Adw.Dialog.Action
                  onClick={() => setModalOpened(false)}
                  label="Save"
                  accent
                />
              </>
            }
          >
            <Adw.Header
              title="Save Changes?"
              subtitle="Open document contains unsaved changes. Changes which are not saved will be permanently lost."
              attached="dialog"
              center
            />
          </Adw.Dialog>
          <Adw.Button
            onClick={() => {
              setModalOpened(true)
            }}
            label="Open Dialog"
            size="large"
            pilled
            accent
          />
        </ComponentGroup>

        <ComponentGroup
          title="Confirm"
          code={{
            jsx: CONFIRM_TYPESCRIPT,
          }}
        >
          <ConfirmExample />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}