import FileCache from 'tank-cache';
import { InMemoryLocalStorage } from 'node-window-polyfill';

import env from '../env.js';

class FileStorage {
    constructor(file) {
        file = file || '.runtime/cache.json';
        this.store = new FileCache(file);
    }
    getItem(key) {
        return this.store.get(key);
    }
    setItem(key, value) {
        this.store.set(key, value);
    }
    removeItem(key) {
        delete this.pull(key);
    }
}

if (global._now === undefined) {
    global._now = () => (new Date()).getTime();
}

if (global.localStorage === undefined) {
    global.localStorage = new FileStorage(env.CACHE_DIR + '/local.json');
}

if (global.sessionStorage === undefined) {
    global.sessionStorage = new InMemoryLocalStorage();
}
