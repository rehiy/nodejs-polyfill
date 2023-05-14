const engine = 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35'
const appVersion = `5.0 (Windows NT 10.0; Win64; x64) ${engine}`

global.navigator = {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: appVersion,
    cookieEnabled: false,
    language: 'zh-CN',
    mimeTypes: [],
    onLine: true,
    platform: 'Win32',
    plugins: [],
    product: 'Gecko',
    productSub: '20030107',
    userAgent: `Mozilla/${appVersion}`,
    vendor: 'Google Inc.',
    vendorSub: '',
}
