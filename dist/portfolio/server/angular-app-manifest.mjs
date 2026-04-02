
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-2UFMTKGU.js",
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
    'index.csr.html': {size: 14263, hash: '64477e0e83b58e104f9fbba4dfe0393a1d76eafddd3fc81df95b3b5af001470d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '906a679777eb2647ba3b4130a9cd553271b62c8aa02ed3ade4630cf9ff3d24cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DL23PK2W.css': {size: 315123, hash: 'WpAbF3sQB8g', text: () => import('./assets-chunks/styles-DL23PK2W_css.mjs').then(m => m.default)}
  },
};
