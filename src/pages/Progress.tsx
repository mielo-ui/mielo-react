import * as Adw from "../../"

export function ProgressPage() {
  return (
    <div className="page progress">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Progress"
            subtitle="Example of progress variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Progress>
              <Adw.Progress.Bar progress={35} />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar progress={65} progressVisible />
            </Adw.Progress>
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Progress size="small">
              <Adw.Progress.Bar progress={40} />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar progress={60} />
            </Adw.Progress>

            <Adw.Progress size="big">
              <Adw.Progress.Bar progress={80} />
            </Adw.Progress>
          </div>
        </Adw.Segment>

        <Adw.Header title="Accent Colors" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Progress>
              <Adw.Progress.Bar accent="green" progress={100} progressVisible />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar accent="red" progress={90} progressVisible />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar accent="yellow" progress={80} progressVisible />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar accent="purple" progress={70} progressVisible />
            </Adw.Progress>

            <Adw.Progress>
              <Adw.Progress.Bar accent="blue" progress={60} progressVisible />
            </Adw.Progress>
          </div>
        </Adw.Segment>

        <Adw.Header title="Multiple Bars" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Progress multiple>
              <Adw.Progress.Bar accent="red" progress={25} />
              <Adw.Progress.Bar accent="green" progress={18} />
              <Adw.Progress.Bar accent="yellow" progress={40} />
            </Adw.Progress>

            <Adw.Progress multiple>
              <Adw.Progress.Bar progressVisible accent="yellow" progress={30} />
              <Adw.Progress.Bar progressVisible accent="green" progress={20} />
              <Adw.Progress.Bar progressVisible accent="purple" progress={15} />
            </Adw.Progress>

            <Adw.Progress size="big" multiple>
              <Adw.Progress.Bar progressVisible accent="yellow" progress={30} />
              <Adw.Progress.Bar progressVisible accent="green" progress={20} />
              <Adw.Progress.Bar progressVisible accent="purple" progress={15} />
            </Adw.Progress>
          </div>
        </Adw.Segment>

        <Adw.Header title="Indeterminate" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex">
            <Adw.Progress>
              <Adw.Progress.Bar accent="purple" indeterminate="pulsating" progress={100} progressVisible />
            </Adw.Progress>
            <Adw.Progress>
              <Adw.Progress.Bar accent="green" indeterminate="filling" progress={80} progressVisible />
            </Adw.Progress>
            <Adw.Progress>
              <Adw.Progress.Bar accent="yellow" indeterminate="sliding" progress={60} progressVisible />
            </Adw.Progress>
            <Adw.Progress>
              <Adw.Progress.Bar accent="blue" indeterminate="swinging" progress={40} progressVisible />
            </Adw.Progress>
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}