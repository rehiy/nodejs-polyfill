import os from 'os';

const engine = `node.js/${process.versions.node} v8/${process.versions.v8}`;
const appVersion = `5.0 (${os.type()} ${os.arch()}) ${engine}`;

global.navigator = {
    appCodeName: 'Mozilla',
    appName: process.release.name,
    appVersion: appVersion,
    cookieEnabled: false,
    language: 'zh-CN',
    mimeTypes: [],
    onLine: true,
    platform: process.platform,
    plugins: [],
    product: process.release.lts,
    productSub: '20030107',
    userAgent: `Mozilla/${appVersion}`,
    vendor: 'OpenJS Foundation',
    vendorSub: '',
};
