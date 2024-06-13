import * as Adw from "../../"

export function MessagePage() {
  return (
    <div className="page message">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Message"
            subtitle="Example of message variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Message
                title="Basic"
                onClose={() => {}}
            />
            <Adw.Message
                title="With description"
                description="Message description text..."
                onClose={() => {}}
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="With Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Message
                title="With description"
                description="Message description text..."
                onClose={() => {}}
                icon={<Adw.Icons.DialogInformation />}
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Accent" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Message title="Default" description="Message description text..." onClose={() => {}} />
            <Adw.Message accent="red" title="Red" description="Message description text..." onClose={() => {}} />
            <Adw.Message accent="purple" title="Purple" description="Message description text..." onClose={() => {}} />
            <Adw.Message accent="green" title="Green" description="Message description text..." onClose={() => {}} />
            <Adw.Message accent="blue" title="Blue" description="Message description text..." onClose={() => {}} />
            <Adw.Message accent="yellow" title="Yellow" description="Message description text..." onClose={() => {}} />
          </div>
        </Adw.Segment>

        <Adw.Header title="Banner Mode" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Message
                title="Banner"
                description="Message description text..."
                onClose={() => {}}
                banner
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}