import * as Adw from "../../"

export function HeaderPage() {
  return (
    <div className="page header">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Header"
            subtitle="Example of header variants"
            size="large"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex-left">
            <Adw.Header
              title="Union Header"
              subtitle="Subtitle of default header"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="splitted-columns">
            <div className="column-flex-left">
              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="large"
              />

              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="medium"
              />

              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="small"
              />
            </div>
            <div className="column-flex">
              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="large"
                center
              />

              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="medium"
                center
              />

              <Adw.Header
                title="Icon Header"
                subtitle="Subtitle of icon header"
                icon={<Adw.Icons.UserHome />}
                size="small"
                center
              />
            </div>
          </div>
        </Adw.Segment>

        <Adw.Header title="Icon horizontally" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex-left">
            <Adw.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Adw.Icons.UserHome />}
              size="large"
              iconSided
            />

            <Adw.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Adw.Icons.UserHome />}
              size="medium"
              iconSided
            />

            <Adw.Header
              title="Icon Header"
              subtitle="Subtitle of icon header"
              icon={<Adw.Icons.UserHome />}
              size="small"
              iconSided
            />
          </div>
        </Adw.Segment>

        <Adw.Header
          title="Flattened"
          subtitle="Fitted without margins"
          size="medium"
        />

        <Adw.Segment placeholder="dev">
          <div className="column-flex-left">
            <Adw.Header
              title="Flattened Header"
              subtitle="Subtitle of flattened header"
              flattened
            />
            <Adw.Header
              title="Flattened Inverted Header"
              subtitle="Subtitle of flattened inverted header"
              flattened
              inverted
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex-left">
            <Adw.Header
              title="Large Header"
              subtitle="Subtitle of large header"
              size="large"
            />

            <Adw.Header
              title="Medium Header"
              subtitle="Subtitle of medium header"
              size="medium"
            />

            <Adw.Header
              title="Small Header"
              subtitle="Subtitle of small header"
              size="small"
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Inverted sizes" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="column-flex-left">
            <Adw.Header
              title="Large Header"
              subtitle="Subtitle of large header"
              size="large"
              inverted
            />

            <Adw.Header
              title="Medium Header"
              subtitle="Subtitle of medium header"
              size="medium"
              inverted
            />

            <Adw.Header
              title="Small Header"
              subtitle="Subtitle of small header"
              size="small"
              inverted
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}