import nodeWindowPolyfill from 'node-window-polyfill';

nodeWindowPolyfill.register();

if (global.location) {
    window.location = global.location;
}

if (global.sessionStorage) {
    window.sessionStorage = global.sessionStorage;
}
