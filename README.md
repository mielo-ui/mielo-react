## Mielo React
React components & wrappers around mielo.css framework.

![logo](https://raw.githubusercontent.com/mielo-ui/mielo.css/main/logo.png)

![preview](https://raw.githubusercontent.com/mielo-ui/mielo.css/main/media/preview.webp)

![dark](https://raw.githubusercontent.com/mielo-ui/mielo.css/main/media/Mielo.Dark.png)

## Quick install

Mielo is constantly in development! Try it out now:

### NPM

```sh
npm install @mielo-ui/mielo @mielo-ui/mielo-react
```

**or**

### Yarn

```sh
npm install @mielo-ui/mielo @mielo-ui/mielo-react
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
@import 'mielo/css/mielo.css'
```

And usage react components like

``` typescript
import * as Mie from "@mielo-ui/mielo-react"

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
Browse the [online documentation here.](https://mielo-ui.github.io/)

# Development
For build library from source:

``` sh
git clone https://github.com/mielo-ui/mielo-react
cd mielo-react

npm install # or "yarn"
npm run fmt # format & linting components
npm build # build module library with .d.ts
```