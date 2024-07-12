import { ComponentGroup } from "../components"
import * as Adw from "../../"

const DEFAULT_TYPESCRIPT = `
import * as Adw from "adwaita-ui"

// ...

<Adw.Checkbox
  name="checkbox-default-1"
  label="Default"
/>

<Adw.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  checked
/>
`.trim()

const DEFAULT_HTML = `
<div class="adw checkbox">
  <input class="input" id="toggle_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="toggle_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default</div>
  </label>
</div>

<div class="adw checkbox">
  <input
    id="toggle_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="toggle_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>

    <div class="content">Default Checked</div>
  </label>
</div>
`.trim()

const CIRCULAR_TYPESCRIPT = `
<Adw.Checkbox
  name="checkbox-default-1"
  label="Default"
  circular
/>

<Adw.Checkbox
  name="checkbox-default-2"
  label="Default Checked"
  circular
  checked
/>
`.trim()

const CIRCULAR_HTML = `
<div class="adw checkbox circular">
  <input class="input" id="toggle_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="toggle_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default</div>
  </label>
</div>

<div class="adw checkbox circular">
  <input
    id="toggle_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="toggle_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Default Checked</div>
  </label>
</div>
`.trim()

const ACCENTS_TYPESCRIPT = `
<Adw.Checkbox
  name="circular-accent-1"
  label="Warning"
  accent="warning"
  cicrular
  checked
/>

<Adw.Checkbox
  name="circular-accent-3"
  label="Success"
  accent="success"
  cicrular
  checked
/>

<Adw.Checkbox
  name="circular-accent-2"
  label="Error"
  accent="error"
  cicrular
  checked
/>
`.trim()

const ACCENTS_HTML = `
<div class="adw checkbox warning">
  <input class="input" id="accents_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="accents_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Warning</div>
  </label>
</div>

<div class="adw checkbox success">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Success</div>
  </label>
</div>

<div class="adw checkbox error">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-3">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Error</div>
  </label>
</div>
`.trim()

const SIZES_TYPESCRIPT = `
<Adw.Checkbox
  name="circular-accent-2"
  label="Small"
  accent="error"
  size="small"
  checked
/>

<Adw.Checkbox
  name="circular-accent-3"
  label="Medium"
  accent="success"
  checked
/>

<Adw.Checkbox
  name="circular-accent-1"
  label="Large"
  accent="warning"
  size="large"
  checked
/>
`.trim()

const SIZES_HTML = `
<div class="adw checkbox small warning">
  <input class="input" id="accents_checkbox-default-1" type="checkbox" />
  
  <label class="label" for="accents_checkbox-default-1">
    <div class="indicator">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Small</div>
  </label>
</div>

<div class="adw checkbox success">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-2">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Medium</div>
  </label>
</div>

<div class="adw checkbox large error">
  <input
    id="accents_checkbox-default-2"
    type="checkbox"
    class="input"
    checked=""
  />

  <label class="label" for="accents_checkbox-default-3">
    <div class="indicator checked">
      <div class="icon">
        <svg />
      </div>
    </div>
    
    <div class="content">Large</div>
  </label>
</div>
`.trim()

export function CheckboxPage() {
  return (
    <div className="page checkbox">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Checkbox"
            subtitle="Different checkbox variants"
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
            html: DEFAULT_HTML,
          }}
        >
          <Adw.Checkbox name="checkbox-default-1" label="Default" />

          <Adw.Checkbox
            name="checkbox-default-2"
            label="Default Checked"
            checked
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Circular"
          code={{
            jsx: CIRCULAR_TYPESCRIPT,
            html: CIRCULAR_HTML,
          }}
        >
          <Adw.Checkbox name="checkbox-default-1" label="Default" cicrular />

          <Adw.Checkbox
            name="checkbox-default-2"
            label="Default Checked"
            cicrular
            checked
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Accents"
          code={{
            jsx: ACCENTS_TYPESCRIPT,
            html: ACCENTS_HTML,
          }}
        >
          <Adw.Checkbox
            name="accents-accent-1"
            label="Warning"
            accent="warning"
            cicrular
            checked
          />
          <Adw.Checkbox
            name="accents-accent-2"
            label="Success"
            accent="success"
            cicrular
            checked
          />
          <Adw.Checkbox
            name="accents-accent-3"
            label="Error"
            accent="error"
            cicrular
            checked
          />
        </ComponentGroup>

        <ComponentGroup
          containerColumn
          title="Sizes"
          code={{
            jsx: SIZES_TYPESCRIPT,
            html: SIZES_HTML,
          }}
        >
          <Adw.Checkbox
            name="circular-accent-2"
            label="Small"
            accent="error"
            size="small"
            checked
          />
          <Adw.Checkbox
            name="circular-accent-3"
            label="Medium"
            accent="success"
            checked
          />
          <Adw.Checkbox
            name="circular-accent-1"
            label="Large"
            accent="warning"
            size="large"
            checked
          />
        </ComponentGroup>
      </Adw.Clamp>
    </div>
  )
}