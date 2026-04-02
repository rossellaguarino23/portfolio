
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-OQNCMTAJ.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-COH3ZROA.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-53JNDROT.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-4QRB253U.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 14263, hash: '8b8acff532f37b3a4276d6f2a6ad9ea9a44b21ffc8abca9d71ee8b5f6d67f515', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '0e1c639b3440560758f21d2fed00d9ea30dd4f3412388269c86f43850ea0a517', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DL23PK2W.css': {size: 315123, hash: 'WpAbF3sQB8g', text: () => import('./assets-chunks/styles-DL23PK2W_css.mjs').then(m => m.default)}
  },
};
