
## Features
<dl>
  <dt>React + Material UI</dt>
  <dd>Fully integrated React, Material UI</dd>

  <dt>Webpack</dt>
  <dd>Using Webpack to package react code</dd>

  <dt>Live Reload</dt>
  <dd>Support webpack hot reload via koa-webpack middleware. Both frontend code and backend code support live reload. No need to manually restart server or use nodemon to restart server on file changes.</dd>
</dl>

<sub><i>Keywords: ThinkJS, React.js, Hot Reloading, ESNext, Babel, Webpack, Material-UI</i></sub>

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```
