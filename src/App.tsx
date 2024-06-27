import { Router, Route, useLocation, useRoute } from "wouter"
import { useCallback, useState, MouseEvent } from "react"

import * as ComponentPages from "./pages"
import * as DemoPages from "./demo"
import * as Adw from "../"

function PageListItem({ title, page }: { title: string; page: string }) {
  const [_, navigate] = useLocation()
  const [isActive] = useRoute(`/${page}`)

  const onClickLink = useCallback(
    (event: MouseEvent<any>) => {
      event.preventDefault()
      event.stopPropagation()
      navigate(`/${page}`)
    },
    [page, title],
  )

  return (
    <Adw.ListItem
      onClick={onClickLink}
      active={isActive}
      link={`/${page}`}
      title={title}
      activatable
    />
  )
}

function App() {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const componentsPages: any = {
    typography: { title: "Typography", page: "typography" },
    header: { title: "Header", page: "header" },
    headerbar: { title: "HeaderBar", page: "headerbar" },
    button: { title: "Button", page: "button" },
    entry: { title: "Entry", page: "entry" },
    checkbox: { title: "Checkbox", page: "checkbox" },
    toggle: { title: "Toggle", page: "toggle" },
    select: { title: "Select", page: "select" },
    radio: { title: "Radio", page: "radio" },
    slider: { title: "Slider", page: "slider" },
    progress: { title: "Progress", page: "progress" },
    container: { title: "Container", page: "container" },
    list: { title: "List", page: "list" },
    row: { title: "Row", page: "row" },
    tab: { title: "Tab", page: "tab" },
    card: { title: "Card", page: "card" },
    dialog: { title: "Dialog", page: "dialog" },
    message: { title: "Message", page: "message" },
    notification: { title: "Notification", page: "notification" },
  }

  const demoPages: any = {
    basic: { title: "Basic", page: "basic" },
    extended: { title: "Extended", page: "extended" },
  }

  const links = Object.keys(componentsPages).map(page => (
    <PageListItem key={`page-item-${page}`} {...componentsPages[page]} />
  ))

  const linksDemo = Object.keys(demoPages).map(page => (
    <PageListItem key={`page-item-${page}`} {...demoPages[page]} />
  ))

  return (
    <Adw.SplitView theme={darkThemeEnabled ? "dark" : "light"}>
      <Adw.SplitView.Sidebar
        opened={sidebarIsOpen}
        headerbar={
          <Adw.HeaderBar
            header={<Adw.Header title="Components" />}
            attached="splitview"
            transparent
            borderless
          />
        }
      >
        <Adw.List>
          {links}
          <div className="divider"></div>

          <Adw.Header
            title="Demo Apps"
            subtitle="Complex demo app pages"
            size="medium"
            attached="list"
          />

          <div className="divider"></div>

          {linksDemo}
        </Adw.List>
      </Adw.SplitView.Sidebar>
      <Adw.SplitView.Content
        headerbar={
          <Adw.HeaderBar
            attached="splitview"
            transparent
            borderless
            header={
              <Adw.Header
                title="Adwaita Web"
                subtitle="List of all components"
              />
            }
            left={
              <Adw.Button
                icon={<Adw.Icons.SidebarShow />}
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              />
            }
            right={
              <Adw.Checkbox
                onChange={event => setDarkThemeEnabled(event.target.checked)}
                checked={darkThemeEnabled}
                label="Dark Theme"
                toggle
                icon={{
                  indicator: {
                    unchecked: <Adw.Icons.WeatherClear />,
                    checked: <Adw.Icons.WeatherClearNight />,
                  },
                }}
              />
            }
          />
        }
      >
        <Router>
          {/* Components */}
          <Route path="typography" component={ComponentPages.TypographyPage} />
          <Route path="header" component={ComponentPages.HeaderPage} />
          <Route path="headerbar" component={ComponentPages.HeaderBarPage} />
          <Route path="checkbox" component={ComponentPages.CheckboxPage} />
          <Route path="toggle" component={ComponentPages.TogglePage} />
          <Route path="radio" component={ComponentPages.RadioPage} />
          <Route path="select" component={ComponentPages.SelectPage} />
          <Route path="slider" component={ComponentPages.SliderPage} />
          <Route path="progress" component={ComponentPages.ProgressPage} />
          <Route path="container" component={ComponentPages.ContainerPage} />
          <Route path="button" component={ComponentPages.ButtonPage} />
          <Route path="dialog" component={ComponentPages.DialogPage} />
          <Route path="message" component={ComponentPages.MessagePage} />
          <Route path="notify" component={ComponentPages.NotifyPage} />
          <Route path="entry" component={ComponentPages.EntryPage} />
          <Route path="list" component={ComponentPages.ListPage} />
          <Route path="card" component={ComponentPages.CardPage} />
          <Route path="row" component={ComponentPages.RowPage} />
          <Route path="tab" component={ComponentPages.TabPage} />

          {/* Demo */}
          <Route path="basic" component={DemoPages.BasicDemoPage} />
          <Route path="extended" component={DemoPages.ExtendedDemoPage} />
        </Router>
      </Adw.SplitView.Content>
    </Adw.SplitView>
  )
}

export default App
