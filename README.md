Install the packages with `npm install`

Build command is `npm run build` and the publish directory is `dist`

To start developing, use `npm start` and follow the link in the console,
example: `http://localhost:5173/`

# Partials

_Used for convenience of development and splitting the html page into parts._

Using a partial:

- Create an html document without `<!DOCTYPE>` and `<head>` parts and work as
  with regular html.
- Import your partial to the page you need, for example `index.html`

```jsx
<body>
  <load ="partials/header.html" />
</body>
```

Save your images to a public folder.

Import images in partials relative to the main html file regardless of where the
partial itself is located HTML

```html
<img src="./img/logo.svg" alt="logo" />
```

```css
.div {
  background-image: url('/img/hero/hero-eclipse.png');
}
```
