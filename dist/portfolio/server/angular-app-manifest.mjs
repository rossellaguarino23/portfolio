
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-PVF3HEMX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-RB75UEU3.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-RLKYYGY6.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-M3V66R2A.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 14153, hash: '64a857b4b361b64f811c5f107c84c55bd526ded4cbbcdf1adfee0050a526e238', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '9bf0ee0f46749f558a7de3de4d9d93c76d9f63cf6aaf0fc3d83ad717fa69587b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DI2RXZ3F.css': {size: 242068, hash: 'f5Y0KXxJ8cQ', text: () => import('./assets-chunks/styles-DI2RXZ3F_css.mjs').then(m => m.default)}
  },
};
