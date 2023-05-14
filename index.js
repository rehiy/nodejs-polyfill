import xhr2 from 'xhr2';
import nodeWindowPolyfill from 'node-window-polyfill';

nodeWindowPolyfill.register();

global.sessionStorage = global.localStorage;
global.XMLHttpRequest = xhr2;
