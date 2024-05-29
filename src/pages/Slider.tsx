import { useRef, useState } from "react"
import * as Adw from "../../"

export function SliderPage() {
  const [first, setFirst] = useState(50)
  const [second, setSecond] = useState({
    max: 30,
    min: 60,
  })

  return (
    <div className="page slider">
      <Adw.Clamp
        header={
          <Adw.Header
            title="Slider"
            subtitle="Example of slider variants"
            center
          />
        }
      >
        <Adw.Header title="Default" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.Slider
              onChange={nextValue => setFirst(nextValue)}
              value={first}
              max={100}
              min={0}
            />
          </div>
        </Adw.Segment>

        <Adw.Header title="Range" size="medium" />

        <Adw.Segment placeholder="dev">
          <div className="inline-flex">
            <Adw.RangeSlider
              onChange={nextValue => setSecond(nextValue)}
              value={second}
              step={1}
              max={100}
              min={0}
            />
          </div>
        </Adw.Segment>
      </Adw.Clamp>
    </div>
  )
}