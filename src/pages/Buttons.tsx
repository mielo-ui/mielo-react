import * as Adw from "../../"

export function ButtonPage() {
  return (
    <div className="page buttons">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Buttons"
            subtitle="Example of different button variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Default" />
          </div>

          <Adw.Header title="Status Colors" size="small" />

          <div className="inline-flex">
            <Adw.Button label="Accent" accent />
            <Adw.Button label="Success" accent="success" />
            <Adw.Button label="Warning" accent="warning" />
            <Adw.Button label="Error" accent="error" />
          </div>

          <Adw.Header title="Simple colored" size="small" />

          <div className="inline-flex">
            <Adw.Button label="Orange" color="orange" />
            <Adw.Button label="Purple" color="purple" />
            <Adw.Button label="Pink" color="pink" />
            <Adw.Button label="Deeppurple" color="deeppurple" />
            <Adw.Button label="Indigo" color="indigo" />
            <Adw.Button label="Lightgreen" color="lightgreen" />
            <Adw.Button label="Deeporange" color="deeporange" />
          </div>
        </Adw.Segment>


        <Adw.Header title="Filled" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Filled" filled />
            <Adw.Button label="Accent" filled accent />
            <Adw.Button label="Success" filled accent="success" />
            <Adw.Button label="Warning" filled accent="warning" />
            <Adw.Button label="Error" filled accent="error" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Transparent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Transparent" transparent />
            <Adw.Button label="Accent" transparent accent />
            <Adw.Button label="Success" transparent accent="success" />
            <Adw.Button label="Warning" transparent accent="warning" />
            <Adw.Button label="Error" transparent accent="error" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Tertiary" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Transparent" transparent tertiary />
            <Adw.Button label="Accent" transparent tertiary accent />
            <Adw.Button label="Success" transparent tertiary accent="success" />
            <Adw.Button label="Warning" transparent tertiary accent="warning" />
            <Adw.Button label="Error" transparent tertiary accent="error" />
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Small" size="small" />
            <Adw.Button label="Medium Default" />
            <Adw.Button label="Large" size="large" />
          </div>
        </Adw.Segment>


        <Adw.Header title="Pilled" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Button label="Pilled" pilled />
            <Adw.Button label="Accent" pilled accent />
            <Adw.Button label="Success" pilled accent="success" />
            <Adw.Button label="Warning" pilled accent="warning" />
            <Adw.Button label="Error" pilled accent="error" />
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
              label="Label"
              accent
            />
            <Adw.Button
              icon={<Adw.Icons.FolderNew />}
              iconLabeled
              label="Label"
              filled
              accent
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