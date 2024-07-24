<p align="center">
  <img src="https://raw.githubusercontent.com/mielo-ui/mielo.css/main/logo.png" />
</p>

<h1 align="center">
  Mielo React
</h1>

<p align="center">
  React components & wrappers around mielo.css framework.
</p>


## Quick install

Mielo is constantly in development! Try it out now:

### NPM

```sh
npm install mielo mielo-react
```

**or**

### Yarn

```sh
npm install mielo mielo-react
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
@import 'mielo/css/mielo.css'
```

And usage react components like

``` typescript
import * as Mie from "mielo-react"

<Mie.Button label="Success" accent="success" />
```

## Browser Support

Mielo is compatible with **recent** versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari

Internet Explorer is not supported.

## Documentation
Browse the [online documentation here.](#todo)

# Development
For build library from source:

``` sh
git clone https://github.com/friktor/mielo-react
cd mielo-react

npm install # or "yarn"
npm run fmt # format & linting components
npm build # build module library with .d.ts
```