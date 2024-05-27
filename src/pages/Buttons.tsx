import * as Adw from "../../"

export function ButtonPage() {
  return (
    <div className="page buttons">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Buttons"
            subtitle="Example of different button variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Label" />
            <Adw.Button label="Label" accent="red" />
            <Adw.Button label="Label" accent="green" />
            <Adw.Button label="Label" accent="blue" />
            <Adw.Button label="Label" accent="purple" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Transparent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Label" transparent />
            <Adw.Button label="Label" transparent accent="red" />
            <Adw.Button label="Label" transparent accent="green" />
            <Adw.Button label="Label" transparent accent="blue" />
            <Adw.Button label="Label" transparent accent="purple" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Filled" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Label" filled transparent />
            <Adw.Button label="Label" filled transparent accent="red" />
            <Adw.Button label="Label" filled transparent accent="green" />
            <Adw.Button label="Label" filled transparent accent="blue" />
            <Adw.Button label="Label" filled transparent accent="purple" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Pilled" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Label" pilled />
            <Adw.Button label="Label" pilled accent="red" />
            <Adw.Button label="Label" pilled accent="green" />
            <Adw.Button label="Label" pilled accent="blue" />
            <Adw.Button label="Label" pilled accent="purple" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button icon={<Adw.Icons.FolderNew />} circular />
            <Adw.Button icon={<Adw.Icons.FolderNew />} />
            <Adw.Button icon={<Adw.Icons.FolderNew />} label="Label" />
            <Adw.Button
              icon={<Adw.Icons.FolderNew />}
              iconLabeled
              label="Label"
            />
            <Adw.Button
              icon={<Adw.Icons.FolderNew />}
              iconLabeled
              accent="blue"
              label="Label"
            />
            <Adw.Button
              icon={<Adw.Icons.FolderNew />}
              iconLabeled
              filled
              accent="blue"
              label="Label"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Groups" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <div className="adw buttons">
              <Adw.Button icon={<Adw.Icons.FolderNew />} />
              <Adw.Button icon={<Adw.Icons.FolderNew />} />
            </div>

            <div className="adw buttons">
              <Adw.Button icon={<Adw.Icons.FolderNew />} label="Label" />
              <Adw.Button icon={<Adw.Icons.FolderNew />} label="Label" />
            </div>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}