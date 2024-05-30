import * as Adw from "../../"

export function TypographyPage() {
  return (
    <div className="page typography">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Typography"
            subtitle="Example of typography text styles"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Stack Header" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Header
              title="Union Header"
              subtitle="Example of big header"
              center
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Default Headers" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <h1>Title 1</h1>
            <h2>Title 2</h2>
            <h3>Title 3</h3>
            <h4>Title 4</h4>
          </div>
        </Adw.Segment>

        <Adw.Header title="Colored Text" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <div className="adw text accent">Accent</div>
            <div className="adw text success">Success</div>
            <div className="adw text warning">Warning</div>
            <div className="adw text error">Error</div>
          </div>
        </Adw.Segment>

        <Adw.Header title="Headings" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <div className="adw heading">Heading</div>
            <p className="adw paragraph">Sample text paragraph</p>

            <div className="adw capture heading">Capture Heading</div>
            <p className="adw capture paragraph">Caption body text</p>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}