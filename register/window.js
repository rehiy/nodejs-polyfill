import nodeWindowPolyfill from 'node-window-polyfill';

nodeWindowPolyfill.register();

if (window.sessionStorage === undefined) {
    window.sessionStorage = global.sessionStorage;
}
