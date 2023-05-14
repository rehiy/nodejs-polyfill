import { InMemoryLocalStorage } from 'node-window-polyfill';

if (global.localStorage === undefined) {
    global.localStorage = new InMemoryLocalStorage();
}

if (global.sessionStorage === undefined) {
    global.sessionStorage = new InMemoryLocalStorage();
}
