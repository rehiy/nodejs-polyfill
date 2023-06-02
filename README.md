# Polyfill on Node.js

Polyfil your node.js environment with this as the `window` when launching your own code

```sh
node -r nodejs-polyfill app.js
```

## What is polyfilled?

- usage of `window` in the code or libraries
- `window.setTimeout` - default `setTimeout` node function
- `window.clearTimeout` - default `clearTimeout` node function
- `window.WebSocket` - version from global object
- `window.ArrayBuffer` - version from global object only
- `window.addEventListener` - empty void function
- `window.navigator` - `{ onLine: true }`
- `window.isNodeJS` - to check if polyfills were aplied
- `window.localStorage` - in memory storage
- `window.sessionStorage` - in memory storage
- `window.Date` - version from global object
- `global.XMLHttpRequest` - using [xhr2](https://www.npmjs.com/package/xhr2)
- `global.WebSocket` - using [ws](https://www.npmjs.com/package/ws) if the right flag is not set
- if the above functions/properties are already set in the `global` object then they will be taken into the account
