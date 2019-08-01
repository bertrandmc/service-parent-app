const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const renderDocument = ({ styleTags, markup, scriptUrl }) => `<!doctype html>
    <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>Parent app</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${styleTags}
      <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js" defer></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" defer></script>
      <script crossorigin src="https://unpkg.com/styled-components/dist/styled-components.min.js" defer></script>
      <script src="${scriptUrl}" defer></script>
      <script src="${assets.client.js}" defer></script>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`;
