
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/home/home.component.ts": [
    {
      "path": "chunk-ZMO337KH.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/bladder-boss/bladder-boss.component.ts": [
    {
      "path": "chunk-KIO7D5AQ.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/boardmatch/boardmatch.component.ts": [
    {
      "path": "chunk-D7MVOQKX.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/case-studies/avolta/avolta.component.ts": [
    {
      "path": "chunk-6AZGU2WW.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 14186, hash: 'b70baefe2faf2be3e79c5ae79279e3e460c3803993d8fec503285dbf1e5c8674', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9444, hash: '9d6deb45ff2c8ebf6b126f1527a350396c133d3018d008941b12d276e2e09172', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3NOLUEX6.css': {size: 312566, hash: 'PkR55OJVgKM', text: () => import('./assets-chunks/styles-3NOLUEX6_css.mjs').then(m => m.default)}
  },
};
